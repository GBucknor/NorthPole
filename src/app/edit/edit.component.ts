import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user$: Object

  updateUser = function() {
    let user = {
        "id": this.user$.id,
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
        "isNaughty": (/true/i).test((<HTMLInputElement>document.getElementById('isNaughty')).value)
    }
    console.log(user['isNaughty'])
    this.data.updateUser(this.user$.id, user).subscribe((data) => {})
    window.location.replace('http://localhost:4200/users')
  }

  constructor(private data: UsersService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUserSingle(this.user$).subscribe(
      data => this.user$ = data,
    )
  }
}
