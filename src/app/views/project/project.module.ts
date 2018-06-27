import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ManageProjectPageEffects } from './effects/manage-project-page.effects';
import { NewProjectEffects } from './effects/new-project.effects';
import { ProjectRoutingModule } from './project-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromProject from './reducers';
import { NewProjectPageComponent } from './containers/new-project-page/new-project-page.component';
import { CreateProjectSuccessComponent } from './components/create-project-success/create-project-success.component';
import { ManageProjectsPageComponent } from './containers/manage-projects-page/manage-projects-page.component';
import { ManageProjectsComponent } from './components/manage-projects/manage-projects.component';
import { EditProjectPageComponent } from './containers/edit-project-page/edit-project-page.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    SelectDropDownModule,
    SharedModule,
    StoreModule.forFeature('project', fromProject.reducers, {
      metaReducers: fromProject.metaReducers,
    }),
    EffectsModule.forFeature([NewProjectEffects, ManageProjectPageEffects]),
  ],
  declarations: [
    CreateProjectSuccessComponent,
    EditProjectPageComponent,
    ManageProjectsComponent,
    ManageProjectsPageComponent,
    NewProjectComponent,
    NewProjectPageComponent,
    EditProjectComponent,
  ],
})
export class ProjectModule {}
