import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { VkApiService } from '../../services/vk-api.service';
import { UserProfile } from '../../models/profile-response'; // Импорт интерфейса

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TuiInputModule, TuiButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnChanges {
  userProfile?: UserProfile;
  displayProfile: {
    city: string;
    bdate: string;
    sex: string;
  } = {
    city: 'Not Specified',
    bdate: 'Not Specified',
    sex: 'Unknown'
  };
  @Input() userId!: string;

  constructor(private vkApi: VkApiService) {}

  ngOnChanges(): void {
    if (this.userId) {
      this.getUserProfile();
    }
  }

  getUserProfile(): void {
    this.vkApi.getUsersInfo(this.userId).subscribe({
      next: (data) => {
        if (data.response.length > 0) {
          this.userProfile = data.response[0];
          this.updateDisplayProfile(this.userProfile);
        }
      },
      error: (error) => {
        console.error('Error fetching user profile:', error);
      }
    });
  }

  updateDisplayProfile(user: UserProfile): void {
    this.displayProfile = {
      city: user.city ? user.city.title : 'Not Specified',
      bdate: user.bdate || 'Not Specified',
      sex: this.getGender(user.sex)
    };
  }

  private getGender(sex: number): string {
    switch (sex) {
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      default:
        return 'Unknown';
    }
  }
}
