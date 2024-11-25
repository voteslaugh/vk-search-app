import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { VkApiService } from '../../services/vk-api.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule], 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnChanges {
  userProfile: any;
  @Input() userId!: string;

  constructor(private vkApi: VkApiService) {}

  ngOnChanges(): void {
    if (this.userId) {
      this.getUserProfile();
    }
  }

  getUserProfile(): void {
    this.vkApi.getUserInfo(this.userId).subscribe(data => {
      this.userProfile = data?.response[0];
    });
  }
}
