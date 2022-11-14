export default class User {
  public readonly id?: number;

  public name: string;
  public username: string;
  public password: string;
  public admin: boolean;

  constructor(props: Omit<User, 'id'>, _id?: number) {
    this.name = props.name;
    this.username = props.username;
    this.password = props.password;
    this.admin = props.admin;
  }
}
