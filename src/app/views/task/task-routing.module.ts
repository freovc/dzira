import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSuccessComponent } from './components/create-success/create-success.component';
import { MyworkPageComponent } from './containers/mywork-page/mywork-page.component';
import { NewTaskPageComponent } from './containers/new-task-page/new-task-page.component';
import { BacklogPageComponent } from './containers/backlog-page/backlog-page.component';
import { TaskEditPageComponent } from './containers/task-edit-page/task-edit-page.component';
import { TaskboardPageComponent } from './containers/taskboard-page/taskboard-page.component';
import { WorkByPersonPageComponent } from './containers/work-by-person-page/work-by-person-page.component';

const routes: Routes = [
  {
    path: 'tasks',
    children: [
      { path: 'new-task', component: NewTaskPageComponent },
      { path: 'create-success', component: CreateSuccessComponent },
      { path: 'backlog', component: BacklogPageComponent, children: [
          {path: 'edit', outlet: 'modal', component: TaskEditPageComponent}
        ] },
      { path: 'taskboard', component: TaskboardPageComponent, children: [
          {path: 'edit', outlet: 'modal', component: TaskEditPageComponent}
        ] },
      { path: 'mywork', component: MyworkPageComponent, children: [
          {path: 'edit', outlet: 'modal', component: TaskEditPageComponent}
        ] },
      { path: 'work-by-person', component: WorkByPersonPageComponent, children: [
          {path: 'edit', outlet: 'modal', component: TaskEditPageComponent}
        ] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}

export const routedComponents = [NewTaskPageComponent];
