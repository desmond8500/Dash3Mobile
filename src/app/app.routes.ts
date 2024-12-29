import { Routes } from '@angular/router';
import { ClientsComponent } from './erp/clients/clients.component';
import { IndexComponent } from './pages/index/index.component';
import { ArticlesComponent } from './stock/articles/articles.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes), },
  { path: 'index', component: IndexComponent},
  { path: 'erp/clients', component: ClientsComponent},
  { path: 'stock/articles', component: ArticlesComponent},
];
