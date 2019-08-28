import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ImageOverviewComponent } from './imageOverview.component';
import { AppComponent } from './app.component';
import { ImageDetailsComponent } from './imageDetails.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [ 
    ImageOverviewComponent,
    AppComponent,
    ImageDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
