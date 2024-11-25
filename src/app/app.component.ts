import { Component } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserFriendsComponent } from './components/user-friends/user-friends.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserProfileComponent,
    UserFriendsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
