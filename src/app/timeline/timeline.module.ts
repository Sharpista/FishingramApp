import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline/timeline.component';
import { PostModule } from '../post/post.module';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    PostModule,
  ],
  exports:[
    TimelineComponent
  ]
})
export class TimelineModule { }
