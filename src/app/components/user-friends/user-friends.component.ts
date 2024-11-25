import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

import { TuiInputModule } from '@taiga-ui/kit';
import { VkApiService } from '../../services/vk-api.service';

@Component({
  selector: 'app-user-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule],
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnChanges {
  friends: any[] = [];
  @Input() userId!: string;

  constructor(private vkApi: VkApiService) {}

  ngOnChanges(): void {
    if (this.userId) {
      this.getUserFriends();
    }
  }

  getUserFriends(): void {
    this.vkApi.getUserFriends(this.userId).subscribe(data => {
      this.friends = data?.response?.items || [];
    });
  }
}
