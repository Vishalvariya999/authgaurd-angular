import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headDataList!: string[];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  isLoggedOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  logo: string = '../assets/image/tagline.png';
}
