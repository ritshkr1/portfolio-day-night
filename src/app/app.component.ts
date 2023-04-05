import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Base';
  theme = 'light';
  themeTitle = this.theme.toUpperCase();
  isDark = false;
  sunMoon = 'bi bi-brightness-high';
  constructor(private router: Router, public datepipe: DatePipe) { }
  currentTime = this.datepipe.transform(new Date(), 'HH');
  ngOnInit(): void {
    if (Number(this.currentTime) >= 18) {
      this.isDark = true;
      this.getTheme();
    }
  }
  getTheme() {
    if (this.isDark) {
      this.theme = 'dark';
      this.themeTitle = this.theme.toUpperCase();
      this.sunMoon = 'bi bi-moon-fill';
    } else {
      this.theme = 'light';
      this.themeTitle = this.theme.toUpperCase();
      this.sunMoon = 'bi bi-brightness-high';
    }
  }
  isTrue() {
    console.log(this.router.url);
    if (
      this.router.url === '/work' ||
      this.router.url === '/about' ||
      this.router.url === '/contact'
    ) {
      return true;
    }
    return false;
  }
}
