import { UserRole } from './user-roles.model';

export interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
  photo: {
    filename?: string;
    filetype?: string;
    fileUrl?: string;
    value?: File;
  };
  role: UserRole;
}
