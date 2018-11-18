import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  check(input) {
    if (input.value != (<HTMLInputElement>document.getElementById('pass')).value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
  }

  registerUser() {
    let user = {
      "username": (<HTMLInputElement>document.getElementById('user')).value,
      "firstName": (<HTMLInputElement>document.getElementById('firstName')).value,
      "lastName": (<HTMLInputElement>document.getElementById('lastName')).value,
      "email": (<HTMLInputElement>document.getElementById('email')).value,
      "street": (<HTMLInputElement>document.getElementById('street')).value,
      "city": (<HTMLInputElement>document.getElementById('city')).value,
      "province": (<HTMLInputElement>document.getElementById('province')).value,
      "country": (<HTMLInputElement>document.getElementById('country')).value,
      "postalcode": (<HTMLInputElement>document.getElementById('postalCode')).value,
      "phone": (<HTMLInputElement>document.getElementById('phone')).value,
      "password": (<HTMLInputElement>document.getElementById('pass')).value
    }
    this.data.registerUser(user).subscribe((data) => {})
    this.router.navigate(['/login'])
  }

  constructor(private data: UsersService, private router: Router) { }

  ngOnInit() {
  }

}
