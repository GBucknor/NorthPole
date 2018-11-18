import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private data: UsersService) { }
  role: Object

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'))
      console.log(currentUser.role)
      if (currentUser.role.toUpperCase() === "ADMIN") {
        (<HTMLInputElement>document.getElementById('userBtn')).removeAttribute("hidden")
      }
    }
  }
}
