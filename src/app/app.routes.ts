import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { NotFound } from './not-found/not-found';
import { BlogDetails } from './blog-details/blog-details';
import { WhoUs } from './who-us/who-us';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'blog/category/:category', component: Blog },
  { path: 'blog/:slug', component: BlogDetails },
  { path: 'blog', component: Blog },
  { path: 'whous', component: WhoUs },
  { path: '**', component: NotFound }
];


