import { Course } from './course.entity';

describe('Course', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Course()).toBeTruthy();
  });
});
