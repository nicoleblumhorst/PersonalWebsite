import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Resume } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpClient: HttpClient){}

  loadResume(): Observable<Resume>{
    return this.httpClient.get("assets/resume.json").pipe(
        map((json: Resume) => {
            return json;
        }));
  }
}
