import { Workout } from './workouts';

export class Group{
  public _id?: string;
  public name: string;
  public type: string;
  public workouts: [Workout];
}
