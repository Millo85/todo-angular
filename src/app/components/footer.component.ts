import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })
  export class FooterComponent {

    @Input() copyright: string='';
    year: number;

    constructor() {
        this.year= new Date().getFullYear();
    }
  }