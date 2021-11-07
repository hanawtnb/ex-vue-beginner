export class student {
  constructor(
    private _id: number,
    private _name: string,
    private _age: number,
    private _depld: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }

  public get depld(): number {
    return this._depld;
  }

  public set depld(depld: number) {
    this._depld = depld;
  }
}
