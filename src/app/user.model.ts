export class User {
    constructor(
      public role?: string,
      public name?: string,
      public email?: string,
      public password?: string,
      public image?: string,
      public userId?: string,
      public _id?: string,
      public isVerified?: boolean
    ) {}
  }
  