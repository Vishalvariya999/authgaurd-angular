import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Divcon2 } from 'src/app/common';

@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.scss'],
})
export class Model1Component implements OnInit {
  ourServices: string = 'Our Services';
  public servicelist: Divcon2[] = [
    {
      id: 1,
      image: '../assets/image/mobile.png',
      title: 'Application Management and Modernisation',
      description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
    your business. We update the old application with new approaches, including the latest languages,
    frameworks, and platforms.`,
      button: 'Learn More ->',
    },
    {
      id: 2,
      image: '../assets/image/web-design-icon.webp',
      title: 'Software Product Engineering',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.`,
      button: 'Learn More ->',
    },
    {
      id: 3,
      image: '../assets/image/testing-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.`,
      button: 'Learn More ->',
    },
    {
      id: 4,
      image: '../assets/image/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description: `Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their
    businesses. Our developers and UI UX designers put the user first to create easy-to-navigate
    interfaces and smooth end-to-end experiences.`,
      button: 'Learn More ->',
    },
    {
      id: 5,
      image: '../assets/image/software-development-1.png',
      title: 'Software outsourcing company',
      description: `Tagline Infotech is an experienced software outsourcing company that provides services for various
    businesses. We have a reliable team of developers that provides high-quality outsourcing services to
    scale your business.`,
      button: 'Learn More ->',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  click(userId: number) {
    if (userId) {
      this.router.navigateByUrl(`service/servicedata/${userId}`);
    }
  }
}
