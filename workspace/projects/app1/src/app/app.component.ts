import { Component } from '@angular/core';
import { FooService } from './foo/foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  constructor(private fooService: FooService) { }

  ngOnInit() {
    console.log(this.fooService.getFooService());
  }

}
