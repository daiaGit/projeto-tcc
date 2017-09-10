import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'esqueci-senha', loadChildren: 'app/pages/esqueci-senha/esqueci-senha.module#EsqueciSenhaModule' },
  { path: 'login-estabelecimento', loadChildren: 'app/pages/login-estabelecimento/login-estabelecimento.module#LoginEstabelecimentoModule' },
  { path: 'login-consumidor', loadChildren: 'app/pages/login-consumidor/login-consumidor.module#LoginConsumidorModule' },
  { path: 'register-estabelecimento', loadChildren: 'app/pages/register-estabelecimento/register-estabelecimento.module#RegisterEstabelecimentoModule' },
  { path: 'register-consumidor', loadChildren: 'app/pages/register-consumidor/register-consumidor.module#RegisterConsumidorModule' },
  { path: 'redefinir-senha', loadChildren: 'app/pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaModule' },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});