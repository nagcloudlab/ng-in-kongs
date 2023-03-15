import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from 'projects/lib1/src/public-api';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Lib1Module,
    FooModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
