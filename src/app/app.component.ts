import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ishover: boolean = false;
  title = 'Hello';

  theme = 'light';
  themeTitle = this.theme.toUpperCase();
  sunMoon = 'bi bi-brightness-high';
  isDark = false;
  bodyText = ['Hello', 'I am', 'Ritesh'];
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
  getValue(event: any, id: number) {
    if (event.type === 'mouseover') {
      if (id === 0) {
        this.bodyText[id] = 'About';
      }
      if (id === 1) {
        this.bodyText[id] = 'Work';
      }
      if (id === 2) {
        this.bodyText[id] = 'Contact';
      }
    }
    if (event.type === 'mouseout') {
      if (id === 0) {
        this.bodyText[id] = 'Hello.';
      }
      if (id === 1) {
        this.bodyText[id] = 'I am';
      }
      if (id === 2) {
        this.bodyText[id] = 'Ritesh';
      }
    }
  }
}
