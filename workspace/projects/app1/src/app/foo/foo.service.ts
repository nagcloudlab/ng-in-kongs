import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class FooService {

  constructor() { }

  getFooService() {
    return "Foo";
  }

}
