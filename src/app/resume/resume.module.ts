import { ResumeService } from './services/resume.service';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import {resumeRouting} from './resume-routing.module';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        resumeRouting,
        MatButtonModule,
        MatIconModule],
    declarations: [ResumeComponent, AboutMeComponent, ContactComponent, EducationComponent, ProjectsComponent, SkillsComponent, WorkComponent],
    exports: [ResumeComponent],
    providers: [ResumeService],
    entryComponents: []
  })
  export class ResumeModule {}
