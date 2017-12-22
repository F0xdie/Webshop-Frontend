import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeName: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  loginCheck(employeeName: string, password: string) {
    if (this.employeeName === '2095' && this.password === 'admin') {

    }

  }

}
