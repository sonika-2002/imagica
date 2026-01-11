import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutComponent } from './logout/logout.component';
import { BookOrderComponent } from './book-order/book-order.component';

export const routes: Routes = [
   {
    path: 'sign-in',
    component: SignInComponent
   },
   {
    path: 'logout',
    component: LogoutComponent
   },
   {
    path: 'book-order',
    component: BookOrderComponent
   }
];
