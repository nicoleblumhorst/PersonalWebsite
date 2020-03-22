import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component'


const routes: Routes = [
  { path: '', redirectTo: '/bucket-list', pathMatch: 'full' },
  { path: 'bucket-list', component: BucketListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
