import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input, Output, EventEmitter, ViewChild,
  TemplateRef
} from '@angular/core';
import { UserAuthService } from '../../services/auth/user-auth.service';
import { User } from '../../models/users';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { DayViewHour } from 'calendar-utils';
import { Subject } from 'rxjs/Subject';
import { Session } from '../../models/sessions';
import { Group } from '../../models/groups';
import { Workout } from '../../models/workouts';
import { FormsModule }   from '@angular/forms';

import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('sessionModal') sessionModal: TemplateRef<any>;
  @ViewChild('groupModal') groupModal: TemplateRef<any>;
  @ViewChild('boulderModal') boulderModal: TemplateRef<any>;
  @ViewChild('sportModal') sportModal: TemplateRef<any>;
  @ViewChild('updateSessionModal') updateSessionModal: TemplateRef<any>;
  @ViewChild('updateWorkoutModal') updateWorkoutModal: TemplateRef<any>;

  constructor(private authService: UserAuthService, private modal: NgbModal, public activeModal: NgbActiveModal) {
    // fill the numArr
    for(let i=0; i<100; i++){
      this.numArr.push(i);
    }
  }

  ngOnInit() {
    // set to today's date
    this.selectedDate = new Date();

    // get sessions for the current month/year
    if(this.authService.userExists()){
        this.getSessions();
    }
  }

  // array used for select element
  numArr =[];

  //calendar variables
  refresh: Subject<any> = new Subject();
  view = 'month';
  selectedDate: Date;
  viewDate: Date = new Date();
  selectedMonthViewDay: CalendarMonthViewDay;
  selectedDayViewDate: Date;
  dayView: DayViewHour[];
  events: Array<CalendarEvent<{ id: String }>> = [];
  activeDayIsOpen: boolean;
  dayOn: boolean;

  // current event that the user is viewing
  currentEvent: CalendarEvent<{ id: String}>;

  //session variables
  sessionsArr: Session[];
  sessionId:string;
  sessionName: string;

  //group variables
  groupId = '5a63e8a12de4125cf5ae2edf';
  groupName = 'Workout 1';
  groupType = 'Boulder';
  groups: Array<Group> = [];

  groupTypeArr = [
    'Boulder',
    'Sport'
  ];
  boulderGradeArr = [
    'VB',
    'V0',
    'V1',
    'V2',
    'V3',
    'V4',
    'V5',
    'V6',
    'V7',
    'V8',
    'V9',
    'V10',
    'V11',
    'V12',
    'V13',
    'V14',
    'V15',
    'V16'
  ];

  sportGradeArr = [
    '5.10a',
    '5.10b',
    '5.10c',
    '5.10d',
    '5.11a',
    '5.11b',
    '5.11c',
    '5.11d',
    '5.12a',
    '5.12b',
    '5.12c',
    '5.12d',
    '5.13a',
    '5.13b',
    '5.13c',
    '5.13d',
    '5.14a',
    '5.14b',
    '5.14c',
    '5.14d',
    '5.15a',
    '5.15b',
    '5.15c'
  ]

  // temp session variables
  tempSessionName: string;
  tempGroupName: string;
  tempGroupType: string;

  // temp workout variables
  tempWorkoutID: string;
  tempWorkoutName: string;
  tempWorkoutReps: number;
  tempWorkoutSets: number;
  tempWorkoutDuration: number;

  // current group user is viewing
  currentGroup: Group;

  // used to ref the modal that is openBoulderModal
  currentModal: NgbActiveModal;

  // index used to keep track of the workout / group that will be removed
  workoutIndex: number;
  groupIndex: number;


  // close the current modal
  onSubmit(): void {
    this.currentModal.close();
  }

  // open session modal to create a session
  openSessionModal():void{
    this.currentModal = this.modal.open(this.sessionModal, { size: 'lg' });
  }

  // open the group modal to create a new group
  openGroupModal():void{
    this.currentModal = this.modal.open(this.groupModal, { size: 'lg'});
  }

  // open the modal to update the session
  openUpdateSessionModal(): void{
    this.tempSessionName = this.sessionName;
    this.currentModal = this.modal.open(this.updateSessionModal, { size: 'lg' });
  }

  // open the boulder modal to create a new workout
  openBoulderModal(group: Group): void{
    this.currentGroup = group;
    this.currentModal = this.modal.open(this.boulderModal, { size: 'lg'});
  }

  // open the sports modal to create a new workout
  openSportModal(group: Group): void{
    this.currentGroup = group;
    this.currentModal = this.modal.open(this.sportModal, { size: 'lg'});
  }

  // open the workout modal to update the workout
  openUpdateWorkoutModal(workout, group, workoutIndex, groupIndex): void{
    this.tempWorkoutID = workout._id;
    this.tempWorkoutName = workout.name;
    this.tempWorkoutSets = workout.sets;
    this.tempWorkoutReps = workout.reps;

    this.workoutIndex = workoutIndex;
    this.groupIndex = groupIndex;

    this.currentGroup = group;
    this.currentModal = this.modal.open(this.updateWorkoutModal, { size: 'lg'});
  }

  // remove the session
  removeSession(): void{
    this.authService.removeSession(this.sessionId).subscribe(
      data => {
        // clear the session
        this.clearSession();

        // remove the event that ref the session
        this.events = this.events.filter(iEvent => iEvent !== this.currentEvent);
        this.currentEvent = null;
        this.activeDayIsOpen = false;
        this.refresh.next();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // remove the group
  removeGroup(group): void {
    this.authService.removeGroup(this.sessionId, group._id).subscribe(
      (data) => {
        // remove the group from the groups array
        this.groups = this.groups.filter(iGroups => iGroups !== group);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // remove the workout
  removeWorkout(workout, group): void{
    this.authService.removeWorkout(workout._id).subscribe(
      (data) => {
        // remove the workout from the group
        group.workouts = group.workouts.filter(iGroup => iGroup !== workout);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  // update the session
  updateSession(): void{
    this.authService.updateSession(this.sessionId, this.tempSessionName).subscribe(
      (data)=>{
        this.clearTempSession();
        this.sessionName = data.name;
        this.currentEvent.title = data.name;
        this.refresh.next();
      },
      (err) => {
        if(err.status == 401){
          console.log('not authorized');
          this.authService.signOut();
        }
      }
    );
  }

  // update the workout
  updateWorkout(): void{
    this.authService.updateWorkout(this.tempWorkoutID, this.tempWorkoutName, this.tempWorkoutSets, this.tempWorkoutReps).subscribe(
      (data) => {
        this.groups[this.groupIndex].workouts[this.workoutIndex].name = this.tempWorkoutName;
        this.groups[this.groupIndex].workouts[this.workoutIndex].sets = this.tempWorkoutSets;
        this.groups[this.groupIndex].workouts[this.workoutIndex].reps = this.tempWorkoutReps;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  // called when user changes months
  updateMonth():void{
    // clear events and set activeDayIsOpen to false
    this.events = [];
    this.activeDayIsOpen = false;
    // get the sessions for the identified month/year
    this.getSessions();
  }

  // get groups using session id
  getGroupsBySessionId(): void{
    this.authService.getGroupsBySessionId(this.sessionId).subscribe(
      (data) => {
          this.groups = data;
      }
    );
  }

  // get sessions for the current month/year for the current user
  getSessions(): void {
    this.sessionsArr = null;

    // call auth service getSessions
    this.authService.getSessions(this.viewDate.getMonth(), this.viewDate.getFullYear()).subscribe(
      data=>{
        // for each session retrieved, create an event that will be displayed on calendar
        if(data.length !== 0){
          for(let session in data){
            this.createEvent(data[session].name, data[session].date.day, data[session].date.month, data[session].date.year, data[session]._id);
            this.refresh.next();
          }
        }

      }
    );
  }

  // create workout for the currentGroup
  createWorkout(): void{
    // call service createWorkout
    this.authService.createWorkout(this.currentGroup._id, this.tempWorkoutName, this.tempWorkoutSets, this.tempWorkoutReps).subscribe(
      data => {
        // add the workout that was returned to group workouts
        this.clearTempWorkout();
        this.currentGroup.workouts.push(data);
      },
      (err) => {
        if(err.status == 401){
          console.log('not authorized');
          this.authService.signOut();
        }
      }
    );
  }



  // create session for the selected date
  createSession(): void{
    this.authService.createSession(this.tempSessionName, this.selectedDate.getDate(), this.selectedDate.getMonth(), this.selectedDate.getFullYear()).subscribe(
      (data) => {
        // create an event from the session returned from the server
        this.clearTempSession();
        this.createEvent(data.name, data.date.day, data.date.month, data.date.year, data._id);
      },
      (err) => {
        if(err.status == 401){
          console.log('not authorized');
          this.authService.signOut();
        }
      }
    );
  }

  // create a group for the selected session
  createGroup(): void {
    this.authService.createGroup(this.sessionId, this.tempGroupName, this.tempGroupType).subscribe(
      data => {
        // add the group returned from the server to the groups array
        this.clearTempGroup();
        this.groups.push(data);
      },
      (err) => {
        if(err.status == 401){
          console.log('not authorized');
          this.authService.signOut();
        }
      }
    );
  }

  // display events to the user when they click on a calendar cell
  dayClicked(day: CalendarMonthViewDay): void {
    // if the day clicked on and the viewdate are the same, determine if the events window will be open or closed
    if (isSameMonth(day.date, this.viewDate)) {
      // if the the day selected has the events window open or the day has no events, close the events window
      // else open the events window
      if ((isSameDay(this.viewDate, day.date) && this.activeDayIsOpen === true) || day.events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = day.date;
      }

      // set the selectedDate to the day that the user clicked
      this.selectedDate = day.date;
      this.dayOn = true;
    }

    // delete the cssclass from the selectedmonthviewday
    if (this.selectedMonthViewDay) {
      delete this.selectedMonthViewDay.cssClass;
    }

    // set the css class for the day clicked on
    day.cssClass = 'cal-day-selected';

    // set selectedMonthViewDay
    this.selectedMonthViewDay = day;

    // set selectedDate
    this.selectedDate = day.date;

    // clear the sessionid and sessionname
    this.clearSession();

    // empty groups
    this.groups = null;
  }

  // called when the month needs to be rendered
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    // set up the Calendar
    // for each cell, determine which cell needs to be highlighted for the user (determined when the user clicks on a calendar cell)
    body.forEach(day => {
      if (this.dayOn && day.date.getTime() === this.selectedDate.getTime()){
        day.cssClass = 'cal-day-selected';
        this.selectedMonthViewDay = day;
      } else {
        day.cssClass = null;
      }
    });
  }

  // set sessionid and sessionname using the event
  setSession(event: CalendarEvent): void{
    this.sessionId = event.meta.id;
    this.sessionName = event.title;
  }

  // clear sessionid and sessionName
  clearSession(): void{
    this.sessionId = null;
    this.sessionName = null;
  }

  // clear temp session variables
  clearTempSession(): void{
    this.tempSessionName = null;
  }

  // clear temp group variables
  clearTempGroup(): void{
    this.tempGroupName = null;
    this.tempGroupType = null;
  }

  clearTempWorkout(): void{
    this.tempWorkoutName = null;
    this.tempWorkoutSets = null;
    this.tempWorkoutReps = null;
  }

  // create an event that will be displayed on the calendar
  // parameters coincide with the session variables
  createEvent(name, day, month, year, id): void {
    this.events.push({
      title: name,
      start: startOfDay(new Date(year, month, day, 0, 0, 0, 0)),
      end: endOfDay(new Date(year, month, day, 0, 0, 0, 0)),
      color: colors.red,
      meta: {
        id: id
      },
      actions: [
        {
          label: '<i class="fa fa-fw fa-book"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.currentEvent = event;
            this.setSession(event);
            this.getGroupsBySessionId();
          }
        },
        {
          label: '<i class="fa fa-fw fa-trash-o"></i>',
          onClick: ({ event }: { event: CalendarEvent }): void => {
            this.sessionId = event.meta.id;
            this.currentEvent = event;
            this.removeSession();
            //this.events = this.events.filter(iEvent => iEvent !== event);
            console.log('Event deleted', event);
          }
        }
      ]
    });
    this.refresh.next();
  }

  /*
  Note: methods defined below will be used when the calendar is updated for week and day views
  */
  hourSegmentClicked(date: Date) {
    this.selectedDayViewDate = date;
    this.addSelectedDayViewClass();
  }

  beforeDayViewRender(dayView: DayViewHour[]) {
    this.dayView = dayView;
    this.addSelectedDayViewClass();
  }

  private addSelectedDayViewClass() {
    this.dayView.forEach(hourSegment => {
      hourSegment.segments.forEach(segment => {
        delete segment.cssClass;
        if (
          this.selectedDayViewDate &&
          segment.date.getTime() === this.selectedDayViewDate.getTime()
        ) {
          segment.cssClass = 'cal-day-selected';
        }
      });
    });
  }
}
