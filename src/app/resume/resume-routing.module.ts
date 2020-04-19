
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ResumeComponent } from './resume.component';

export const routes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'resume', component: ResumeComponent }
];

export const resumeRouting: ModuleWithProviders = RouterModule.forChild(routes);