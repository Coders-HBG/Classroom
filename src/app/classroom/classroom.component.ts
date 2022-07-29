import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {
  constructor(public fAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    console.log('entered classroom');
    
  }

  logout() {
    this.fAuth.signOut();
    this.router.navigate(['auth']);
  }

}
