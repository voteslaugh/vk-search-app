// user-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VkApiService } from '../../services/vk-api.service';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  userId: string = '';

  constructor(private vkApi: VkApiService) {}

  ngOnInit(): void {}

  getUserProfile(): void {
    this.vkApi.getUserInfo(this.userId).subscribe(data => {
      this.userProfile = data.response[0];
    });
  }
}
