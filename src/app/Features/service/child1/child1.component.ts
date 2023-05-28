import { Component, OnInit } from '@angular/core';
import { Ideactive } from '../../auth/guard/test.guard';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  canExit() {
    if (confirm('Are you sure you want to exit?')) {
      return true;
    }
    return false;
  }
}
