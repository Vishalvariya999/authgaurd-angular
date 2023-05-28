import { Injectable } from '@angular/core';
import { Divcon2, IData } from './common';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}

  dataList: IData[] = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
    {
      id: 3,
      name: 'User 3',
    },
    {
      id: 4,
      name: 'User 4',
    },
    {
      id: 5,
      name: 'User 5',
    },
  ];
  public servicelist: Divcon2[] = [
    {
      id: 1,
      image: '../assets/image/mobile.png',
      title: 'Application Management and Modernisation',
      description: `Here at Tagline, we provide the service of Application management and modernisation for the growth of
    your business. We update the old application with new approaches, including the latest languages,
    frameworks, and platforms.Application modernization is the process of taking existing legacy applications and modernizing their platform infrastructure, internal architecture, and/or features. Much of the discussion around application modernization today is focused on monolithic, on-premises applications—typically updated and maintained using waterfall development processes—and how those applications can be brought into cloud architecture and release patterns, namely microservices and DevOps.
    The benefits of application modernization can typically be summarized as improving the velocity of new feature delivery, exposing the functionality of existing applications to be consumed via API by other services, and re-platforming applications from on-premises to cloud for the purpose of application scale and performance as well as long-term data center and IT strategy.`,
      button: 'Learn More ->',
    },
    {
      id: 2,
      image: '../assets/image/web-design-icon.webp',
      title: 'Software Product Engineering',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.When software engineering is not carefully planned and mapped out, it can become complex. Its strategies are difficult to implement, and numerous constraints appear along the way on product production.

    Such challenges emerge when projects exceed their budgets, timelines are not met, and the product's quality reflects a low level of quality.
    
    To avoid these drawbacks, software engineering was introduced to address all issues that could have an impact on the overall performance of the product and the progress of project implementation.
    
    With product software engineering in place, the application is guaranteed to be built flawlessly, correctly, on time, and with no additional costs.`,
      button: 'Learn More ->',
    },
    {
      id: 3,
      image: '../assets/image/testing-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description: `At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,
    Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA
    ensures the quality of the software.Although there are subtle differences between Agile and DevOps Testing, those working with Agile will find DevOps a little more familiar to work with (and eventually adopt). While Agile principles are applied successfully in the development & QA iterations, it is a different story altogether (and often a bone of contention) on the operations side. DevOps proposes to rectify this gap.

    Now, instead of Continuous Integration, DevOps involves “Continuous Development”, where the code was written and committed to Version Control, will be built, deployed, tested and installed on the Production environment that is ready to be consumed by the end-user.
    
    This process helps everyone in the entire chain since environments and processes are standardized. Every action in the chain is automated. It also gives freedom to all the stakeholders to concentrate their efforts on designing and coding a high-quality deliverable rather than worrying about the various building, operations, and QA processes.`,
      button: 'Learn More ->',
    },
    {
      id: 4,
      image: '../assets/image/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description: `Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their
    businesses. Our developers and UI UX designers put the user first to create easy-to-navigate
    interfaces and smooth end-to-end experiences.Businesses today are looking to build and deliver seamless digital experiences. While technology is the backbone for these experiences, companies need a clear strategy and vision to respond to evolving customer needs and market conditions. This requires a robust digital strategy and design capability that leverages latest technologies and cutting edge frameworks to help you discover new business models and deliver enhanced customer value.

    Persistent helps clients develop a clear digital business strategy by bringing together design frameworks, industry experience and technology expertise that unify business and technology architectures to drive business results.`,
      button: 'Learn More ->',
    },
    {
      id: 5,
      image: '../assets/image/software-development-1.png',
      title: 'Software outsourcing company',
      description: `Tagline Infotech is an experienced software outsourcing company that provides services for various
    businesses. We have a reliable team of developers that provides high-quality outsourcing services to
    scale your business.Companies that offer third-party services are known as outsourcing companies. The client hires them to complete certain projects or fulfill full-time roles for them. Outsourcing companies are essentially distributed workloads and are typically located in a different country or city. 

    These days, businesses can outsource almost any business function possible. Anything from software development to customer service could be easily outsourced.
    
    `,
      button: 'Learn More ->',
    },
  ];
}
