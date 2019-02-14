export interface IState {
    [key: string]: any;
  }

export interface IUser {
    username: string,
    password: string,
    role: string,
}

export interface IAd {
    id?: string;
    date?: string;
    username: string;
    category: string;
    title: string;
    description: string;
    price: string;
}

export interface IAction {
    type: string;
    payload: any;
    [key: string]: any;
}
