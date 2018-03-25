import { Directive, ElementRef, Renderer, Component } from '@angular/core';

@Component({
  selector: '[share-toolbar]',
  template: `
  <ion-icon name="logo-twitter"></ion-icon>
  <ion-icon name="logo-facebook"></ion-icon>
  <ion-icon name="share"></ion-icon>
  <ng-content></ng-content>
  `,
  styles: ['./share-toolbar.scss']
})
export class ShareToolbar {

	constructor() {

    }
}