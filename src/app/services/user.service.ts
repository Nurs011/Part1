import {User} from '../user';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    let userList: User[];
    userList = [
      new User(101, 'Putin', 'Active'),
      new User(484, 'Nazarbayev', 'Inactive'),
      new User(505, 'Islam', 'Inactive'),
      new User(555, 'Lukashenko', 'Active')
    ];

    this.loggingService.log('List of users: ' + userList);

    return userList;
  }
}
