import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
 

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('maintitle') title; 
  
  showScrolledTitle: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    
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

  inViewport($event){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
