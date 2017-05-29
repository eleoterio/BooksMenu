import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';


import { CadastroPage } from '../pages/cadastro/cadastro';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { FavoritoPage } from '../pages/favorito/favorito';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RedditServiceProvider } from '../providers/reddit-service/reddit-service';

@NgModule({
  declarations: [
    MyApp,
    CarrinhoPage,
    CadastroPage,
    FavoritoPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarrinhoPage,
    CadastroPage,
    FavoritoPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditServiceProvider,
  ]
})
export class AppModule {}
