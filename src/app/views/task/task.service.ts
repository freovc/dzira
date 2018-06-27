import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import { TaskForm } from './types/task-form';
import { Task } from './models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TASK_URL;

  constructor(private http: HttpClient, private config: AppConfig) {
    this.TASK_URL= `${this.config.apiEndpoint}/tasks`;
  }

  createTask(task: TaskForm): Observable<Task> {
    return this.http.post<Task>(this.TASK_URL, task);
  }
  c
}