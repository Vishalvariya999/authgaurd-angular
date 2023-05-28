import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/main.service';
// import { Divcon2 } from 'src/app/common';

interface Divcon2 {
  id: number;
  image: string;
  title: string;
  description: string;
  button: string;
}
@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.scss'],
})
export class Model2Component implements OnInit {
  public serviceDetails!: Divcon2;
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
    this.mainService.servicelist.find((data: any) => {
      if (data.id == this.userId) {
        this.serviceDetails = data;
      }
    });
  }
}
