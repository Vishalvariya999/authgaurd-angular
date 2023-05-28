import { Component, OnInit } from '@angular/core';
import { Headtextval } from 'src/app/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Headtext: Headtextval = {
    title1: 'Software Development Company',
    title2: '& IT Consultancy',
    title3: 'Serving',
    title4: 'tart-UPs To Fortune 500',
    description1:
      'With the help of Innovation and Technology, We give you the power to',
    description2: `change the world with your
    ideas.`,
    button: 'Schedule a meeting',
    image: '../assets/image/images.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
