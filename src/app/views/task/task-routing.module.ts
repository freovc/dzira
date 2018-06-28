import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSuccessComponent } from './components/create-success/create-success.component';
import { NewTaskPageComponent } from './containers/new-task-page/new-task-page.component';
import { BacklogPageComponent } from './containers/backlog-page/backlog-page.component';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
      { path: 'new-task', component: NewTaskPageComponent },
      { path: 'create-success', component: CreateSuccessComponent },
      { path: 'backlog', component: BacklogPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}

export const routedComponents = [NewTaskPageComponent];
