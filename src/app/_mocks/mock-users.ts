import { User } from '../_models/user';

export const USERS: User[] = [
  { id: 1, username: 'Alice', password: 'alice', apikey: 'foo-bar-baz',isadmin: true},
  { id: 2, username: 'Bob', password: 'bob', apikey: 'bar-baz-waldo', isadmin: false},
  { id: 3, username: 'Carol', password: 'carol', apikey: 'baz-waldo-plugh', isadmin: false},
  { id: 4, username: 'Dirk', password: 'dirk', apikey: 'waldo-plugh-foo', isadmin: true},

];
