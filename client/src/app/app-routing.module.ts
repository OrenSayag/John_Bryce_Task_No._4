import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { TaskUnitComponent } from './components/task-unit/task-unit.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ListComponent},
  {path:"add", component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
