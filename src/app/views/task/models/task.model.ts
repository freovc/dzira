import { Project } from '../../project/models/project.model';
import { User } from '../../users/models/User.model';

export interface Task {
  id: string;
  title: string;
  description: string;
  project: Project | string | number;
  status: string;
  member: User | number | string;
}
