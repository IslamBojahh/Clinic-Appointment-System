import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicComponent } from './clinic/clinic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';
import {MatButtonModule, MatCheckboxModule,MatNativeDateModule,MatInputModule} from '@angular/material';



const appRoutes: Routes = [
  {
    path: 'clinics',
    component: ClinicComponent,
    data: { title: 'clinics List' }
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ClinicComponent,
    DialogComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule, 
    MatCheckboxModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule


  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ClinicComponent,DialogComponent]

})
export class AppModule { }
