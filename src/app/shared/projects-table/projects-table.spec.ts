import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTable } from './projects-table';

describe('ProjectsTable', () => {
  let component: ProjectsTable;
  let fixture: ComponentFixture<ProjectsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
