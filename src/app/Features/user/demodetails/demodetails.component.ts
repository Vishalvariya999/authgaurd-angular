import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/common';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-demodetails',
  templateUrl: './demodetails.component.html',
  styleUrls: ['./demodetails.component.scss'],
})
export class DemodetailsComponent implements OnInit {
  public udetails!: IData;
  private userId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response: any) => {
      if (response) {
        this.userId = response.id;
      }
    });
    this.mainService.dataList.find((res: any) => {
      if (res.id == this.userId) {
        this.udetails = res;
      }
    });
  }
}
