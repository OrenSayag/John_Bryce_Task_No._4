import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public successDivMessage:string = ""

  constructor(
    public _r:Router,
    public _tasks:TasksService,
    public _fb:FormBuilder,
  ) { }

    public myForm = this._fb.group({
      desc: ["", Validators.required],
      workerId: ["", Validators.required]
    })

  public async addTask() {
    const res =  await this._tasks.addTodoUnit(this.myForm.controls.desc.value, this.myForm.controls.workerId.value)
    if(res){
      this.successDivMessage = "Successfuly added task!"
      setTimeout(() => {
        this._r.navigateByUrl('/')
      }, 400)
      
    }
  }

  ngOnInit(): void {
    this._tasks.getHomeMembers()
  }

}
