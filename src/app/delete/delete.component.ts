import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  user$: any

  deleteUser = function() {
    this.data.deleteUser(this.user$.id).subscribe((data) => {})
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
