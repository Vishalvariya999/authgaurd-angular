import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from 'src/app/common';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  commondata!: IData[];
  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit(): void {
    // console.log('userModule');

    this.commondata = this.mainService.dataList;
    // console.log('commodata :>> ', this.commondata);
  }

  click(dataId: number) {
    if (dataId) {
      this.router.navigateByUrl(`user/data/${dataId}`);
      // console.log('dataId :>> ', dataId);
    }
  }
}
