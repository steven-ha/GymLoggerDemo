
import { Component, OnInit, NgZone} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserAuthService } from '../../services/auth/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authService: UserAuthService,
    private router: Router) {
  }

  ngOnInit() {

  }

}
