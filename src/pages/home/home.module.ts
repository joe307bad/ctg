import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ElasticHeader } from '../../components/elastic-header';


@NgModule({
  declarations: [
    HomePage,
    ElasticHeader
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
  ],
})
export class HomePageModule {}
