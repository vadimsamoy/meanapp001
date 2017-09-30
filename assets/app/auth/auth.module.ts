
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { AuthService } from './auth.service';
import { authRouting } from './auth.routing';

@NgModule({
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent 
    ],
    imports: [CommonModule, ReactiveFormsModule, authRouting],
    providers: [AuthService]
})

export class AuthModule {
    
}