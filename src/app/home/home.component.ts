import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : User [];
  query : string = "";
  constructor(private userService : UserService) {
    this.users = userService.getFriends();
    
   }

  ngOnInit() {
  }

}
