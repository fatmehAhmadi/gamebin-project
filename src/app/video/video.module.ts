import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { EventBlockerDirective } from '../shared/directives/event-blocker.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    ReactiveFormsModule,
    EventBlockerDirective, //دایرکتیو اونجایی که مورد نیازه ایمپورت میشه
    SharedModule
  ]
})
export class VideoModule { }
