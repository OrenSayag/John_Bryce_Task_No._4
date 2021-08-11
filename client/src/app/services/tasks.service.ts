import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import MembersModel from '../models/members.model';
import TasksModel from '../models/tasks.model';
// import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public houseMembers:MembersModel[] = []
  public allTasks:TasksModel[] = []

  constructor(
    public _http:HttpClient
  ) { }

  // hetHomeMembers
  // getTodoList
  // addTodoUnit
  // delTodoUnit

  public async getHomeMembers():Promise<void>{
    const res:any = await this._http.get('http://localhost:666/houseMembers').toPromise()
    if(res.ok){
      this.houseMembers = res.familyMembers
      console.log(res.familyMembers)
    }
    else{
      console.log("failed to fetch family members")
    }
  }

  public async getTodoList():Promise<void>{
    const res:any = await this._http.get('http://localhost:666/tasks').toPromise()
    if(res.ok){
      this.allTasks = res.allTasks
      console.log(res.allTasks)
    }
    else{
      console.log("failed to fetch tasks")
    }
  }

  public async addTodoUnit(desc:string, workerId:string):Promise<boolean>{
    const res:any = await this._http.post('http://localhost:666/tasks',
    {desc, workerId}
    ).toPromise()
    if(res.ok){
      console.log(res.ok)
      return true
    }
    else{
      console.log("failed to add task")
      return false
    }
  }

  public async delTodoUnit(taskId:string):Promise<boolean>{
    console.log(taskId)
    const res:any = await this._http.delete('http://localhost:666/tasks/'+taskId)
    .toPromise()
    if(res.ok){
      console.log(res.ok)
      return true
    }
    else{
      console.log("failed to delete task")
      return false
    }
  }

}
