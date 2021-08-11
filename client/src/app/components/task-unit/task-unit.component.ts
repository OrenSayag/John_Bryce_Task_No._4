import { Component, Input, OnInit } from '@angular/core';
import TasksModel from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-unit',
  templateUrl: './task-unit.component.html',
  styleUrls: ['./task-unit.component.css']
})
export class TaskUnitComponent implements OnInit {

  audio: any;


  @Input()
  public task:TasksModel = {
    desc: "",
    created: new Date(),
    worker: {
      _id:"",
      name:"",
      desc:"",
      nick:"",
      color:"",
    },
    _id: "",
  }

  constructor(
    public _tasks:TasksService,
  ) { }

  public async delTodoUnit():Promise<void>{
    // console.log(this.task._id)
    const res = await this._tasks.delTodoUnit(this.task._id)
    if(res){
      this._tasks.allTasks = this._tasks.allTasks.filter(t=>t._id!==this.task._id)
    }
  }

  ngOnInit(): void {
    
  }

}
