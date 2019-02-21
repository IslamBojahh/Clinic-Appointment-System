import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormGroup,FormBuilder, Validators, FormControl, NgForm} from '@angular/forms'
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  description:string;
  id:number
  public name:string;
  public email:string;
  public phone:string;
  public date:string;
  private data:any;

  registerForm: FormGroup;
  submitted = false;
  constructor(
    public rest:RestService, 
    private dialogRef: MatDialogRef<DialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.name;
    this.id=data.id;
}
    

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:['',[Validators.required,
        Validators.email, 
      ]],
      phone:['',[Validators.required,
        Validators.minLength(8),  
        Validators.maxLength(12),  
        Validators.pattern('^[0-9]*$')
      ]],
      date:['',Validators.required]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.bookData();
}

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

bookData(){

 this.data={
   clinic_id:this.id,
   full_name:this.name,
   mobile_number:this.phone,
   email:this.email,
   appointment_date:this.date,
   approved:0,
 
 }
 console.log(this.data)
 this.rest.postRequest(this.data).subscribe((result)=>{
   console.log(result);
   this.close();
 },(err)=>
 {
   console.log(err)
 }
 
 )


}
  

}
