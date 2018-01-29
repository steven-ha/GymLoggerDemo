import { Injectable } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/users';
import { Session } from '../../models/sessions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserAuthService {

  user: SocialUser; // set by google/facebook
  loggedIn: boolean = false;
  serverUser: User; // set by server after successful authentication, needed to make requests for specific user

  createSessionURL = 'session/createSession';
  createGroupURL = 'session/createGroup'
  createWorkoutURL = 'session/createWorkout';
  getSessionURL = 'session/getSessionsByUserId';
  //getGroupsURL = 'session/getGroupsBySessionId';
  //getWorkoutsURL = 'session/getWorkoutsByGroupId';
  getGroupsBySessionURL = 'session/getGroupsBySessionId';
  getUserURL = 'auth/google/getUserByUserId';

  removeSessionURL = 'session/removeSession';
  removeWorkoutURL = 'session/removeWorkout';
  removeGroupURL = 'session/removeGroup';
  updateSessionURL = 'session/updateSession';
  updateWorkoutURL = 'session/updateWorkout';
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  userExists(): boolean{
    if (this.user) {
      return true;
    } else {
      return false;
    }

    //console.log(this.serverUser);
  }

  // check if the user is authenticated to gain access
  startService() {
    this.authService.authState.subscribe(
      (user) => {
          this.user = user;
          if(this.user){
            this.loggedIn = true;
            localStorage.setItem('accessToken', user.authToken);
            this.loadUser();
          }
      },
      (error) => {
        console.log('error getting user');
        console.log(error);
      }
    );
  }

  loadUser(): void {
    this.getUser().subscribe(
      (data) => {
        if(data){
          this.serverUser = data[0];
          this.router.navigate(['/calendar']);

        }
      },
      (err) => {
        if(err.status == 401){
          console.log('not authorized');
          this.signOut();
        }
      }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  //retrieve the user from the server
  getUser(): Observable<any> {

    return this.http.post(this.getUserURL,{
      'firstName': this.user.firstName,
      'lastName' : this.user.lastName,
      'email': this.user.email,
      'provider': this.user.provider,
      'userId': this.user.id
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }


  // create session using day month year
  createSession(name: String, day: Number, month: Number, year: Number): Observable<any> {
    return this.http.post(this.createSessionURL,{
      '_id': this.serverUser._id,
      'name': name,
      'date' : {'day': day, 'month': month, 'year': year}
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // create group
  createGroup(sessionId, name, type): Observable<any> {
    return this.http.post(this.createGroupURL,{
      'id': sessionId,
      'name': name,
      'type' : type
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // create workout
  createWorkout(groupId, name, sets, reps): Observable<any> {
    return this.http.post(this.createWorkoutURL,{
      'groupId': groupId,
      'type': 'Boulder',
      'name': name,
      'sets': sets,
      'reps': reps
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // retrieve sessions
  getSessions(month: number, year: number): Observable<any>{

    return this.http.get(this.getSessionURL,{
        headers: new HttpHeaders().set('Access_token', localStorage.getItem('accessToken')),
        params: new HttpParams().set('id', this.serverUser._id.toString()).set('month', month.toString()).set('year', year.toString())
      }
    )
  }

  // retrieve groups using session id
  getGroupsBySessionId(sessionId): Observable<any>{
    return this.http.get(this.getGroupsBySessionURL,
      {
        headers: new HttpHeaders().set('Access_token', localStorage.getItem('accessToken')),
        params: new HttpParams().set('id', sessionId)
      }
    )
  }

  // updateSession
  updateSession(id, name): Observable<any> {
    return this.http.post(this.updateSessionURL,{
      'updatedName': name,
      'id': id
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // updateSession
  removeSession(id): Observable<any> {
    return this.http.delete(this.removeSessionURL, {
      headers: new HttpHeaders().set('Access_token', localStorage.getItem('accessToken')),
      params: new HttpParams().set('id', id)
    })
  }

  removeGroup(sessionId, groupId): Observable<any> {
    return this.http.post(this.removeGroupURL, {
      'sessionId': sessionId,
      'groupId': groupId
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // updateSession
  removeWorkout(id): Observable<any> {
    return this.http.post(this.removeWorkoutURL, {
      'id': id
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // updateSession
  updateWorkout(id:string, name:string, sets:number, reps:number): Observable<any> {
    return this.http.post(this.updateWorkoutURL,{
      'id': id,
      'updatedName': name,
      'updatedSets': sets,
      'updatedReps': reps
    }, {headers: {
      'Content-Type':'application/json',
      'Access_token': localStorage.getItem('accessToken')}}
    );
  }

  // sign the user out
  signOut(): void {
    this.authService.signOut().then(
      () => {
        console.log('signed out');
        localStorage.clear();
        this.loggedIn = false;
        this.serverUser = null;
        this.user = null;
        this.router.navigate(['/']);
      }
    );
  }

  /*
  facebook sign in will be implemented at a later date
  */
  // sign in using facebook
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
