export class Student {
  acmeStudentRecordId: string;
  profileId: number;
  totalCompletedCourses: number;
  totalTutorials: number;

  constructor(student: {
    acmeStudentRecordId?: string,
    profileId?: number,
    totalCompletedCourses?: number,
    totalTutorials?: number}) {
    this.acmeStudentRecordId = student.acmeStudentRecordId || '';
    this.profileId = student.profileId || 0;
    this.totalCompletedCourses = student.totalCompletedCourses || 0;
    this.totalTutorials = student.totalTutorials || 0;
  }
}
