import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ElasticHeader } from '../../components/elastic-header';
import { ShareToolbar } from '../../components/share-toolbar/share-toolbar';
import { NgInviewModule } from 'angular-inport'; 
import { InViewport } from '../../components/in-viewport';


@NgModule({
  declarations: [
    HomePage,
    ElasticHeader,
    ShareToolbar,
    InViewport
  ],
  imports: [         
    NgInviewModule,
    IonicPageModule.forChild(HomePage)
  ],
})
export class HomePageModule {}
