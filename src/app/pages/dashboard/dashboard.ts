import { Component } from '@angular/core';
import { Sidebar } from '../../layout/sidebar/sidebar';
import { Topbar } from '../../layout/topbar/topbar';
import { StatCard } from '../../shared/stat-card/stat-card';
import { ProjectsTable } from '../../shared/projects-table/projects-table';
import {ActivityFeed} from '../../shared/activity-feed/activity-feed';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Topbar, StatCard,ProjectsTable,ActivityFeed],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}