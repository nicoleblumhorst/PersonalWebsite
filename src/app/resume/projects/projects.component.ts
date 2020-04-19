import { ResumeService } from '../services/resume.service';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input()
  set projects(val: Project[]) {
    this._projects = val;
    this.currentProject = val[0];
  }

  get projects(): Project[] {
    return this._projects;
  }

  _projects: Project[] = [];
  currentProject: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

  back(): void {
    const currentIndex = this.projects.indexOf(this.currentProject);
    const backIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : this.projects.length - 1;
    this.currentProject = this.projects[backIndex];
  }

  next(): void {
    const currentIndex = this.projects.indexOf(this.currentProject);
    const nextIndex = currentIndex + 1 < this.projects.length ? currentIndex + 1 : 0;
    this.currentProject = this.projects[nextIndex] ;
  }

  buildImageAssetLink(fileName: string): string {
    return '../../assets/'+ fileName;
  }

}
