import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {}
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
}
