import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from "@angular/material";
import {DialogComponent} from '../dialog/dialog.component'
import {MatDialogModule} from "@angular/material";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {


  clinics:any = [];
  title = "Example Angular Material Dialog";

  constructor(public rest:RestService, 
     private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getClinics();
  }

  getClinics() {
    this.clinics = [];
    this.rest.getClinics().subscribe((data: {}) => {
      console.log(data);
      this.clinics = data;
    });
  }

  openDialog(name:string ,id:number) {
   
  const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
        id:id,
        name: name,
    };

    dialogConfig.panelClass='my-panel';
    
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
 } 

}
