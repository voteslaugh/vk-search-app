import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserFriendsComponent } from './components/user-friends/user-friends.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    TuiInputModule,
    TuiButtonModule,
    UserProfileComponent,
    UserFriendsComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputUserId: string = '';
  confirmedUserId: string = '';
  showProfile: boolean = false;
  showFriends: boolean = false;

  confirmUserId(): void {
    console.log('User ID confirmed:', this.inputUserId);
    this.confirmedUserId = this.inputUserId;
    this.showProfile = false;
    this.showFriends = false;
  }

  showProfileInfo(): void {
    console.log('Show Profile:', this.confirmedUserId);
    this.showProfile = true;
  }

  showFriendsList(): void {
    console.log('Show Friends:', this.confirmedUserId);
    this.showFriends = true;
  }
}
