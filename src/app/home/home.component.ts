import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public journals = [
    {
      title:'First Journal',
      content:'The first Journal'
    },
    {
      title:'Second Journal',
      content:'The Second Journal'
    }
  ]
public form: FormGroup;
  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]


    });
  }
onSubmit(){
  this.journals.push(this.form.value),
  console.log(this.form.value),
  console.log('hey im submitting')
}
}
