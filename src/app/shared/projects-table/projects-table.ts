import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-table',
  imports: [CommonModule],
  templateUrl: './projects-table.html',
  styleUrl: './projects-table.css',
})
export class ProjectsTable {
  projects =[
    {
      name: 'Cloudxp',
      status: 'Active',
      team: '2',
    },
     {
      name: 'NewStudio',
      status: 'Active',
      team: '4',
    },
     {
      name: 'Work',
      status: 'Pending',
      team: '6',
    },
    {
      name: 'ProjectX',
      status: 'Pending',
      team: '3',
    }

  ]
}
