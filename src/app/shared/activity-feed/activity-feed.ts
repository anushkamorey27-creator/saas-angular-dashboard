import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-feed',
  imports: [CommonModule],
  templateUrl: './activity-feed.html',
  styleUrl: './activity-feed.css',
})
export class ActivityFeed {
  activities = [
    'CloudXP project created',
    '5 new users registered',
    'Revenue report generated',
    'Analytics dashboard updated',
    'New team member invited'
  ]
}
