import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FlexLayoutColumnComponent } from './flex-layout-column.component';
import { SideNavComponent } from './side-nav.component';
import { AngularMaterialComponent } from './angular-material.component';
import { MatSelectModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { AngularRoutingComponent } from './angular-routing.component';
import { RouterNamedOutletComponent } from './router-named-outlet.component';
import { MessaginServiceComponent } from './messagin-service.component';
import { MessagingService, IMessage } from './messaging.service';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutColumnComponent,
    SideNavComponent,
    AngularMaterialComponent,
    AngularRoutingComponent,
    RouterNamedOutletComponent,
    MessaginServiceComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FlexLayoutModule, MatSidenavModule, MatButtonModule,
    MatSelectModule, MatSliderModule, MatToolbarModule
  ],
  exports: [
    SideNavComponent
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
