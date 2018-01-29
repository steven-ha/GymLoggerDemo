export class Session{
  public _id?: String;
  public date: {day: Number, month: Number, year: Number};
  public userId: String;
  public groups: [String];
}
