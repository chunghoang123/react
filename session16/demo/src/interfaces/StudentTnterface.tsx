import { StudentStatus } from "../assets/enums/StudentEnum";
export interface Student {
  id: number;
  name: string;
  dob: string;
  email: string;
  status: StudentStatus;
}

