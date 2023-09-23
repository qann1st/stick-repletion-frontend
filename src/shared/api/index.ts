'use client';

import { IQuestion, IUser } from '../types';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';
class Api {
  private token: string | null;
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = '';
  }

  private async fetch(
    url: RequestInfo | URL,
    method: Methods = 'GET',
    body?: Object | string
  ) {
    const jsonBody = typeof body === 'object' ? JSON.stringify(body) : body;
    const response = await fetch(this.baseURL + url, {
      body: jsonBody,
      method,
      headers: {
        'Content-Type': 'application/json',
        authorization: this.token ? 'Bearer ' + this.token : '',
      },
    });
    const json = await response.json();
    if (response.ok) return json;
    throw new Error(json.message);
  }

  public getToken(): string | null {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public removeToken(): void {
    this.token = null;
  }

  public async signIn(data: { email: string; password: string }): Promise<{
    accessToken: string;
  }> {
    return this.fetch('signin', 'POST', data).then(res => {
      this.setToken(res.accessToken);
      return res;
    });
  }

  public signUp(data: {
    email: string;
    username: string;
    password: string;
  }): Promise<{
    accessToken: string;
  }> {
    return this.fetch('signup', 'POST', data).then(res => {
      this.setToken(res.accessToken);
      return res;
    });
  }

  public getUserMe(): Promise<IUser> {
    return this.fetch('users/me').then(res => res);
  }

  public getQuestions(
    page: number
  ): Promise<{ questions: IQuestion[]; totalCount: number; pages: number }> {
    return this.fetch(`questions?page=${page}&limit=${15}`);
  }

  public getQuestionById(id: string): Promise<IQuestion> {
    return this.fetch(`questions/${id}`);
  }

  public upRating(
    id: string
  ): Promise<{ rating: number; likes: string[]; dislikes: string[] }> {
    return this.fetch(`questions/rating/up/${id}`, 'PUT');
  }

  public async cancelRating(
    id: string
  ): Promise<{ rating: number; likes: string[]; dislikes: string[] }> {
    return this.fetch(`questions/rating/down/${id}`, 'PUT');
  }
}

export const api = new Api(process.env.API_BASEURL ?? 'http://localhost:4000/');
