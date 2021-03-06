import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ElasticHeader } from '../../components/elastic-header';
import { ShareToolbar } from '../../components/share-toolbar/share-toolbar';
import { NgInviewModule } from 'angular-inport'; 
import { InViewport } from '../../components/in-viewport';
import { DirectivesModule } from '../../components/directives.module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    DirectivesModule,         
    NgInviewModule,
    IonicPageModule.forChild(HomePage)
  ],
})
export class HomePageModule {}
