import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { User } from '../users/models/User.model';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private PROJECT_URL;

  constructor(private http: HttpClient, private config: AppConfig) {
    this.PROJECT_URL = `${this.config.apiEndpoint}/projects`;
  }

  createProject(project: Project): Observable<CreateProjectResponse> {
    return this.http.post<CreateProjectResponse>(this.PROJECT_URL, {
      ...project,
      // TODO uncomment send only id in real app
      // members: (project.members as Array<User>).map((user: User) => user.id),
    });
  }

  getProjects(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(this.PROJECT_URL);
  }

  getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>([this.PROJECT_URL, projectId].join('/'));
  }
  updateProject(projectId: string, project): Observable<Project> {
    return this.http.patch<Project>(`${this.PROJECT_URL}/${projectId}`, {
      ...project,
      // TODO uncomment send only id in real app
      // members: (project.members as Array<User>).map((user: User) => user.id),
    });
  }
  deleteUser(userId: string | number): Observable<any> {
    return this.http.delete(`${this.PROJECT_URL}/${userId}`);
  }
}
export interface CreateProjectResponse {}
