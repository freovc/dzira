import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectSuccessComponent } from './components/create-project-success/create-project-success.component';
import { EditProjectPageComponent } from './containers/edit-project-page/edit-project-page.component';
import { ManageProjectsPageComponent } from './containers/manage-projects-page/manage-projects-page.component';
import { NewProjectPageComponent } from './containers/new-project-page/new-project-page.component';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      { path: 'new-project', component: NewProjectPageComponent },
      { path: 'create-success', component: CreateProjectSuccessComponent },
      { path: 'manage-projects', component: ManageProjectsPageComponent, children: [
          {path: 'edit', outlet: 'modal', component: EditProjectPageComponent}
        ]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
