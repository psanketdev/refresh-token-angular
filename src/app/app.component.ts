import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../app/component/about/about.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { LoginComponent } from './component/login/login.component';

class abc {
  constructor() {
    console.log('abc constructor called');
  }


  show() {
    alert('Hello from abc')
  }
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  // viewProviders: [abc],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'angular18_app';
  // chidlData!: string;
  // localdata!: any;
  // isBrowser: any;

  constructor( @Inject(DOCUMENT) private document: Document) {
    // console.log('AppComponent constructor called');
    // const localStorage = document.defaultView?.localStorage;
    // if(localStorage) {
    //   this.localdata = JSON.parse(localStorage.getItem('visitData') || '{}');
    // }
    // console.log(this.localdata);
    
    // _abc.show()
  }


  ngOnInit(): void {

  }

  // getChildData(val: string) {
  //   this.chidlData = val;
  // }

  // @HostListener('click', ['$event'])
  // onClick() {
  //   console.log('HostListener click');
  // }
}


