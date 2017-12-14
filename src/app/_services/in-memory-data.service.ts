import { InMemoryDbService } from "angular-in-memory-web-api";
import { User, Widget } from '../_models/index';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let  users = [
      { id: 1, username: 'Alice', password: 'alice', apikey: 'foo-bar-baz',isadmin: true},
      { id: 2, username: 'Bob', password: 'bob', apikey: 'bar-baz-waldo', isadmin: false},
      { id: 3, username: 'Carol', password: 'carol', apikey: 'baz-waldo-plugh', isadmin: false},
      { id: 4, username: 'Dirk', password: 'dirk', apikey: 'waldo-plugh-foo', isadmin: true}
    ];
    let widgets = [
      { id: 1, name: 'Foo', price: 9.99 },
      { id: 2, name: 'Bar', price: 2.50 },
      { id: 3, name: 'Baz', price: 7.11 }
    ];
    return {
      users,
      widgets
    };
  }
}
