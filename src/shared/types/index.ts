type MongoId = string;

export enum Months {
  января = 1,
  февраля = 2,
  марта = 3,
  апреля = 4,
  мая = 5,
  июня = 6,
  июля = 7,
  августа = 8,
  сентября = 9,
  октября = 10,
  ноября = 11,
  декабря = 12,
}

export interface IQuestion {
  owner: IUser;
  title: string;
  problem: string;
  attemptsFix: string;
  answers: IAnswer[];
  likes: string[];
  dislikes: string[];
  tags: string[];
  createTimestamp: Date;
  _id: MongoId;
}

export interface IAnswer {
  owner: IUser;
  title: string;
  problem: string;
  attemptsFix: string;
  likes: string[];
  dislikes: string[];
  tags: string[];
  createTimestamp: Date;
  _id: MongoId;
}

export interface IUser {
  _id: MongoId;
  username: string;
  avatar: string;
  email: string;
  createAccount: Date;
  questions: IQuestion[];
  answers: IAnswer[];
}
