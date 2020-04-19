import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Project } from '../models/project.model';
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient){}

  loadResume(): Observable<Resume>{
    return this.httpClient.get("assets/projects.json").pipe(
        map((json: Resume) => {
            return json;
        }));
  }
}
