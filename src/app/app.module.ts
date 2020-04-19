import { HttpClient } from 'selenium-webdriver/http';
import { ProjectsService } from './resume/services/projects.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketListService } from './bucket-list/bucket-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProofComponent } from './bucket-list/proof/proof.component';
import { ResumeModule } from './resume/resume.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BucketListComponent,
    ProofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ResumeModule
  ],
  providers: [BucketListService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
