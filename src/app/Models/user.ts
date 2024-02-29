export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _surname: string;

  private _date: Date;
  private _salary: number;

  private _socialClass: number;

  private _ocupation: string;

  constructor(id: number, name: string, email: string, surname: string, date: Date, salary: number, socialClass: number, ocupation: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._surname = surname;
    this._date = date;
    this._salary = salary;
    this._socialClass = socialClass;
    this._ocupation = ocupation;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get socialClass(): number {
    return this._socialClass;
  }

  set socialClass(value: number) {
    this._socialClass = value;
  }

  get ocupation(): string {
    return this._ocupation;
  }

  set ocupation(value: string) {
    this._ocupation = value;
  }
}
