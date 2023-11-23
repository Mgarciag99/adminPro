import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public imgUrl = '';
  user: User;
  constructor (
    private UserService: UserService
  ){
    this.imgUrl = UserService.user.imageUrl
    this.user = UserService.user;
  }

  logout(){
    this.UserService.logout();
  }

}
