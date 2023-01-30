import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';


var config = {
    projectId: 'angular25-b4b26',
    appId: '1:635910620524:web:e50080c343ee184a1b5f49',
    storageBucket: 'angular25-b4b26.appspot.com',
    apiKey: 'AIzaSyAPPNtaYiKezwm2r5yjTDLCFYTR35IkNEY',
    authDomain: 'angular25-b4b26.firebaseapp.com',
    messagingSenderId: '635910620524',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    PagesModule,
    ComponentsModule,
    provideAuth(() => getAuth()),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
