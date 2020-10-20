import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // CREATED BY $ng g c components/users
  constructor() { }

  ngOnInit(): void {
    console.log("on init")
  }

}
