# Testing Frontend
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## API Frontends

### CRUD
| Resource          | POST (create)     | GET (read)   | PUT (update)      | DELETE  (delete)  |
| ------------------|-------------------|--------------|-------------------|-------------------|
| /orders           | New Order         | List Orders  | Bad Request (400) | Bad Request (400) | 
| /orders/1         | Bad Request (400) | Show Order   | Update Order      | Delete Order      |
| /admin/users      | New User          | List Users   | Bad Request (400) | Bad Request (400) | 
| /admin/users/1    | Bad Request (400) | Show Alice   | Update Alice      | Delete Alice      |
| /admin/widgets    | New Widget        | List Widgets | Bad Request (400) | Bad Request (400) | 
| /admin/widgets/1  | Bad Request (400) | Show Foo     | Update Foo        | Delete Foo        |

### Actions
| Resource          | POST (create)     | GET (read)        | PUT (update)      | DELETE  (delete)  |
| ------------------|-------------------|-------------------|-------------------|-------------------|
| /authenticate     | Log In            | Bad Request (400) | Bad Request (400) | Bad Request (400) | 
| /logout           | Bad Request (400) | Log Out           | Bad Request (400) | Bad Request (400) | 



# Original README
Angular 2/5 User Registration and Login Example with Angular CLI

To see a demo and further details go to http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial

