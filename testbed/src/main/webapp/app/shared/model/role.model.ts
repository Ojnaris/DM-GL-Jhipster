import { IUserAccount } from 'app/shared/model/user-account.model';
import { INotification } from 'app/shared/model/notification.model';

export interface IRole {
  id?: number;
  rolesUser?: IUserAccount;
  roles?: INotification[];
}

export class Role implements IRole {
  constructor(public id?: number, public rolesUser?: IUserAccount, public roles?: INotification[]) {}
}
