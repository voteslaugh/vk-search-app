// user-friends.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VkApiService } from '../../services/vk-api.service';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-user-friends',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule],
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.css']
})
export class UserFriendsComponent implements OnInit {
  friends: any[] = [];
  userId: string = '';

  constructor(private vkApi: VkApiService) {}

  ngOnInit(): void {}

  getUserFriends(): void {
    this.vkApi.getUserFriends(this.userId).subscribe(data => {
      this.friends = data.response.items;
    });
  }
}
