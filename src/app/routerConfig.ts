// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'menu',
    component: MenuComponent
  }
];
export default appRoutes