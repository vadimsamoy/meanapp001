
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { routing } from './app-routing';
import { MessageModule } from './messages/message.module';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
        AppComponent,        
        AuthenticationComponent,
        HeaderComponent,       
        ErrorComponent
    ],
    imports: [BrowserModule, routing, HttpModule, MessageModule],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})

export class AppModule {
    
}