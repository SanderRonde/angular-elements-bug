import { Component, OnInit } from '@angular/core';
import { InjectorService } from '../injector.service';

@Component({
  selector: 'app-foo',
  template: '<custom-bar></custom-bar>',
  styleUrls: [],
  providers: [InjectorService],
})
export class FooComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
