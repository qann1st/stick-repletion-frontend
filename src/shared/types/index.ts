type MongoId = string;

export interface IQuestion {
  owner: { _id: MongoId }[];
  title: string;
  problem: string;
  attemptsFix: string;
  rating: { _id: MongoId }[];
  tags: string[];
  createTimestamp: Date;
  _id: MongoId;
}

export interface IAnswer {
  owner: { _id: MongoId }[];
  title: string;
  problem: string;
  attemptsFix: string;
  rating: { _id: MongoId }[];
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
