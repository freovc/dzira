import { Project } from '../../project/models/project.model';
import { User } from '../../users/models/User.model';
import { ProjectStatus } from './project-status.enum';

export interface TaskForm {
  id: string;
  title: string;
  description: string;
  project: Project;
  status: string;
  member: User;
}
