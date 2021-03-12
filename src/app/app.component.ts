import { Component } from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularServices';

  userList: User[] = [];
    
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }

  getUsers() {
    this.userList = this.userService.getUsers();
  }
}
