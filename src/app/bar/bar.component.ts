import { Component, OnInit } from '@angular/core';
import { InjectorService } from '../injector.service';

@Component({
  selector: 'app-bar',
  template: '<p>Bar works</p>',
  styleUrls: [],
})
export class BarComponent implements OnInit {
  constructor(private _injector: InjectorService) {}

  ngOnInit(): void {}
}
