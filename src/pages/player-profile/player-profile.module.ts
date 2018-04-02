import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerProfilePage } from './player-profile';
import { ElasticHeader } from '../../components/elastic-header';
import { ShareToolbar } from '../../components/share-toolbar/share-toolbar';
import { InViewport } from '../../components/in-viewport';
import { DirectivesModule } from '../../components/directives.module';

@NgModule({
  declarations: [
    PlayerProfilePage
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(PlayerProfilePage),
  ],
})
export class PlayerProfilePageModule {}
