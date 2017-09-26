import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: string[] = ['Male', 'Female'];
  submitForm: FormGroup;

  ngOnInit() {
    this.submitForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.email),
      'gender': new FormControl('Female')
    });
  }

  onSubmit() {
    console.log(this.submitForm.value);
  }
}
