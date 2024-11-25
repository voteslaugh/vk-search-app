import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { VkApiService } from '../../services/vk-api.service';
import { UserProfile, VKApiResponse } from '../../models/profile-response'; // Импорт интерфейсов

@Component({
  selector: 'app-user-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule],
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.less']
})
export class UserFriendsComponent implements OnChanges {
  friends: UserProfile[] = [];
  @Input() userId!: string;

  constructor(private vkApi: VkApiService) {}

  ngOnChanges(): void {
    if (this.userId) {
      this.getUserFriends();
    }
  }

  getUserFriends(): void {
    this.vkApi.getUserFriends(this.userId).subscribe({
      next: (data) => {
        const friendIds = data?.response?.items;
        if (friendIds && friendIds.length) {
          this.vkApi.getUsersInfo(friendIds.join(',')).subscribe({
            next: (usersData: VKApiResponse) => {
              this.friends = usersData.response;
              console.log('Detailed Friends Data:', this.friends);
            },
            error: (error) => {
              console.error('Error fetching detailed friends info:', error);
            }
          });
        }
      },
      error: (error) => {
        console.error('Error fetching friends list:', error);
      }
    });
  }
}
