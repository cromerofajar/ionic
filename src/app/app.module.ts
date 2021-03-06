import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ComponentsModule} from "../components/components.module";
import { TalksProvider } from '../providers/talks/talks';
import {HttpClientModule} from "@angular/common/http";
import {SuccessPage} from "../pages/success/success";
import {IonicStorageModule} from "@ionic/storage";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
    imports: [
        BrowserModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(MyApp),
        ComponentsModule,
        HttpClientModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TalksProvider
  ]
})
export class AppModule {}
