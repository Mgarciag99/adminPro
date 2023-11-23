import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public imgUrl = '';
  user: User;

  constructor (
    private UserService: UserService
  ){
    this.imgUrl = UserService.user.imageUrl
    this.user = UserService.user;

  }
}
