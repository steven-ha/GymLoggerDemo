import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private googleSignInImg: String;

  constructor(
    private userAuthService: UserAuthService) {

      this.googleSignInImg = '../../assets/btn_google_signin_light_normal_web.png';
  }

  ngOnInit(){
    this.userAuthService.startService();
  }

  ngAfterViewInit(){


  }
}
