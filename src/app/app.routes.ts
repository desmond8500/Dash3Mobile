import { Routes } from '@angular/router';
import { ClientsPageComponent } from './erp/clients-page/clients-page.component';
import { ArticlesPageComponent } from './stock/articles-page/articles-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { GalaxyPageComponent } from './Tools/galaxy-page/galaxy-page.component';
import { ProjetsPageComponent } from './erp/projets-page/projets-page.component';
import { ProjetPageComponent } from './erp/projet-page/projet-page.component';
import { BrandsPageComponent } from './stock/brands-page/brands-page.component';
import { ProvidersPageComponent } from './stock/providers-page/providers-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgottenPageComponent } from './pages/forgotten-page/forgotten-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RessourcesPageComponent } from './ressources/ressources-page/ressources-page.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent},
  // Login
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'forgotten', component: ForgottenPageComponent},
  // Pages
  { path: 'index', component: IndexPageComponent},
  // ERP
  { path: 'erp/clients', component: ClientsPageComponent},
  { path: 'erp/projets', component: ProjetsPageComponent},
  { path: 'erp/projet', component: ProjetPageComponent},
  // Stock
  { path: 'stock/articles', component: ArticlesPageComponent },
  { path: 'stock/brands', component: BrandsPageComponent },
  { path: 'stock/providers', component: ProvidersPageComponent },
  // Tools
  { path: 'tools/galaxy', component: GalaxyPageComponent },
  { path: 'ressources/list', component: RessourcesPageComponent },
  //
  { path: 'test', component: TestComponent },
];
