import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  ngOnInit(): void {
    this._tasks.getTodoList()
    setTimeout(() => {
      // console.log(this)
    }, 2000)
        
  }
  
  constructor(
    // public _s:ServiceService,
    public _r:Router,
    public _tasks:TasksService
  ) { }
}
