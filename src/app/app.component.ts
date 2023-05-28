import { Component } from '@angular/core';
import { Headtextval } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'route_tagline';
  HeaderData: string[] = [
    'Case Study',
    'About Us',
    'Hire Developer',
    'Technology',
    'Industry',
  ];

  ourServices: string = 'Our Services';
  ourBlogs: string = 'Our Blogs';

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
}
