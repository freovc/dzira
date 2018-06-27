import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {
  @Input() LoadingProjects: boolean;
  @Input() LoadingProjectsSuccess: boolean;
  @Input() LoadingProjectsFail: boolean;
  @Input() deletingProject: boolean;
  @Input() deletingProjectSuccess: boolean;
  @Input() deletingProjectFail: boolean;

  @Input() projects: Array<Project>;

  @Output() selectProject = new EventEmitter<Project>();
  @Output() deleteProject = new EventEmitter<Project>();
  @Output() clearState = new EventEmitter();
  selectedProject: Project;
  deleteModalVisible: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  editProject(project: Project) {
    this.selectProject.emit(project);
    this.router.navigate(['/projects/manage-projects', {outlets: {modal: ['edit']}}]);
  }
  showDeleteDialog(project: Project) {
    this.deleteModalVisible = true;
    this.selectedProject = project;
  }
  deleteCallback() {
    this.deleteProject.emit(this.selectedProject);
  }
  closeDeleteModal() {
    this.clearState.emit();
    this.deleteModalVisible = false;
  }
}
