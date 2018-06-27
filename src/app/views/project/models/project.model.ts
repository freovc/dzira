import { User } from '../../users/models/User.model';

export interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  members: Array<User> | Array<string>;
}
