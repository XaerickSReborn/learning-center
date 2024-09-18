import { Student } from './student.entity';

describe('Student', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Student()).toBeTruthy();
  });
});
