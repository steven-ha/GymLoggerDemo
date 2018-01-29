import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: UserAuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {

  }
  signOut() {

    this.authService.signOut();

  }



}
