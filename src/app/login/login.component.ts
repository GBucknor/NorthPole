import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService.login((<HTMLInputElement>document.getElementById('user')).value, 
      (<HTMLInputElement>document.getElementById('pass')).value)
        .pipe(first())
        .subscribe(
            data => {
                window.location.replace("http://localhost:4200/");
            });
  }

}
