import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component'
import { ProofComponent } from './bucket-list/proof/proof.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule'
  },
  { path: 'bucket-list', component: BucketListComponent },
  { path: 'proof/:id', component: ProofComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
