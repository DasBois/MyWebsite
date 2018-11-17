import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '../../../node_modules/@angular/common/http'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  public journals = [
   
  ]
  public form: FormGroup
  constructor(
    public fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
    this.getData();
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]


    });
  }
  onSubmit() {
    this.journals.push(this.form.value),
      console.log(this.form.value),
      console.log('hey im submitting')
  }

  getData() {
    this.http.post('http://localhost:3000/yum',{}).subscribe((result: any) => {
    console.log(result.data);
    }, (err) => {
      console.log(err);
    }
  );

    
  }
}

