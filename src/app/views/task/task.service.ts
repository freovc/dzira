import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppConfig } from '../../app.config';
import { ProjectService } from '../project/project.service';
import { UsersService } from '../users/users.service';
import { Task } from './models/task.model';
import { TaskForm } from './types/task-form';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private TASK_URL;

  constructor(
    private http: HttpClient,
    private config: AppConfig,
    private userService: UsersService,
    private projectService: ProjectService,
  ) {
    this.TASK_URL = `${this.config.apiEndpoint}/tasks`;
  }

  createTask(task: TaskForm): Observable<Task> {
    const body = {...task, member: +task.member, project: +task.project};
    return this.http.post<Task>(this.TASK_URL, body);
  }
  updateTask(task: Task): Observable<Task> {
    const body = {...task, member: +task.member, project: +task.project};
    return this.http.put<Task>(`${this.TASK_URL}/${task.id}`, body);
  }

  deleteTask(task: Task): Observable<any> {
    return this.http.delete<any>(`${this.TASK_URL}/${task.id}`);
  }

  getTasksWithoutMember(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${this.TASK_URL}?member=0`);
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${this.TASK_URL}`);
  }
  // we can call this like here or
  // in real app try to use /users/:id/tasks
  getUserTasks({userId}): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${this.TASK_URL}?member=${userId}`);
  }


  getTask(task: Task): Observable<Task> {
    return this.http
      .get<Task>(`${this.TASK_URL}/${task.id}`)
      .pipe(
        switchMap(task =>
          forkJoin(
            this.userService
              .getUser(task.member as number)
              .pipe(catchError(err => of(null))),
            this.projectService.getProject(task.project as string),
          ).pipe(map(([member, project]) => ({ ...task, member, project }))),
        ),
      );
  }

}
