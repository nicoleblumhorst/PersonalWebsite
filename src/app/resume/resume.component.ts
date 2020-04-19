import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { ResumeService } from './services/resume.service';
import { Resume } from './models/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private projectsService: ResumeService) { }

  ngOnInit(): void {
    this.projectsService.loadResume().subscribe((resume: Resume) => {
      this.resume = resume;
    })
  }

}
