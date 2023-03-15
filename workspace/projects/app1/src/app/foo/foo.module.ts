import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { FooDirective } from './foo.directive';
import { FooPipe } from './foo.pipe';
import { FooService } from './foo.service';



@NgModule({
  declarations: [
    FooComponent,
    FooDirective,
    FooPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooComponent
  ],
  providers: [FooService],
})
export class FooModule { }
