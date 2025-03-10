import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { EventBlockerDirective } from '../shared/directives/event-blocker.directive';


@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    EventBlockerDirective //دایرکتیو اونجایی که مورد نیازه ایمپورت میشه
  ]
})
export class VideoModule { }
