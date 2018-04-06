import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { useAnimation, trigger, transition, style, animate } from '@angular/animations';
import {  bounce, bounceInRight} from 'ng-animate';

/**
 * Generated class for the PlayerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-profile',
  templateUrl: 'player-profile.html',  
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('.35s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('.35s', style({transform: 'translatex(-100%)'}))
      ])
    ]),
    trigger('slideInOut1', [
      transition(':enter', [
        style({transform: 'translateX(400%)'}),
        animate('.35s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('.35s', style({transform: 'translatex(-100%)'}))
      ])
    ]),
    trigger('slideInOut2', [
      transition(':enter', [
        style({transform: 'translateX(500%)'}),
        animate('.35s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('.35s', style({transform: 'translatex(-100%)'}))
      ])
    ]),
    trigger('slideInOut3', [
      transition(':enter', [
        style({transform: 'translateX(600%)'}),
        animate('.35s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('.35s', style({transform: 'translatex(-100%)'}))
      ])
    ]),
    trigger('slideInOut4', [
      transition(':enter', [
        style({transform: 'translateX(450%)'}),
        animate('.35s', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('.35s', style({transform: 'translatex(-100%)'}))
      ])
    ])
  ]
})
export class PlayerProfilePage {

  @ViewChild('maintitle') title; 
  
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;
  showScrolledTitle: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.visible = true;
    },1000);
    setTimeout(()=>{
      this.visible1 = true;
    },1400);
    setTimeout(()=>{
      this.visible2 = true;
    },1800);
    setTimeout(()=>{
      this.visible3 = true;
    },2200);
    setTimeout(()=>{
      this.visible4 = true;
    },2600);
  }
  onScroll(){
    var inView =this.check();
    if(inView.value){
      this.showScrolledTitle = false;
    }else{
      this.showScrolledTitle = true;
    }
  }
  
  check(partial:boolean = true, direction:string = 'both'): {target: string, value: boolean} {
    const el = this.title.nativeElement;

    const elSize = (el.offsetWidth * el.offsetHeight);

    const rec = el.getBoundingClientRect();

    const vp = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const tViz = rec.top >= 0 && rec.top < vp.height;
    const bViz = rec.bottom > 0 && rec.bottom <= vp.height;

    const lViz = rec.left >= 0 && rec.left < vp.width;
    const rViz = rec.right > 0 && rec.right <= vp.width;

    const vVisible = partial ? tViz || bViz : tViz && bViz;
    const hVisible = partial ? lViz || rViz : lViz && rViz;

    let event = {
      target: el,
      value: false
    };

    if (direction === 'both') {
      event['value'] = (elSize && vVisible && hVisible) ? true : false;
    }
    else if (direction === 'vertical') {
      event['value'] = (elSize && vVisible) ? true : false;
    }
    else if (direction === 'horizontal') {
      event['value'] = (elSize && hVisible) ? true : false;
    }
    return event;
    //this.inViewport.emit(event);
}
}