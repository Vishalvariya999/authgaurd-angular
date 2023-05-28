import { Component, OnInit } from '@angular/core';
import { Placeval } from 'src/app/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  // public placeData!: Placeval[];
  public placelist: Placeval = {
    country: 'India (HQ)',
    address: `Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat,
    Gujarat 394101`,
    number: '+91 9913 808 285',
  };
  ngOnInit(): void {}
}
