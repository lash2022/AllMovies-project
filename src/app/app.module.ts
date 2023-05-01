import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutModule } from './features/main-layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeContentComponent } from './pages/home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
