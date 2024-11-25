import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    FormsModule,
    TuiInputModule,
    TuiButtonModule,
    UserProfileComponent,
    UserFriendsComponent
  ],
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  inputUserId: string = '';
  confirmedUserId: string = '';
  showProfile: boolean = false;
  showFriends: boolean = false;

  confirmUserId(): void {
    console.log('User ID confirmed:', this.inputUserId);
    if (this.inputUserId) {
      this.confirmedUserId = this.inputUserId;
      this.showProfile = false;
      this.showFriends = false;
    } else {
      console.error('User ID is empty!');
    }
  }

  showProfileInfo(): void {
    console.log('Show Profile:', this.confirmedUserId);
    if (this.confirmedUserId) {
      this.showProfile = true;
    }
  }

  showFriendsList(): void {
    console.log('Show Friends:', this.confirmedUserId);
    if (this.confirmedUserId) {
      this.showFriends = true;
    }
  }
}
