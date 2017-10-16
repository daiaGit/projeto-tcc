
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/** App Componentes */
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SucessoCadastroComponent } from './pages/sucesso/sucesso-cadastro.component';
import { AtivaCadastroComponent } from './pages/ativa-cadastro/ativa-cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'shop', loadChildren: 'app/shop/shop.module#ShopModule' },
  { path: 'adm', loadChildren: 'app/adm/adm.module#AdmModule' },
  { path: 'smarket', loadChildren: 'app/smarket/smarket.module#SmarketModule' },
  { path: 'esqueci-senha', loadChildren: 'app/pages/esqueci-senha/esqueci-senha.module#EsqueciSenhaModule' },
  { path: 'login-estabelecimento', loadChildren: 'app/pages/login-estabelecimento/login-estabelecimento.module#LoginEstabelecimentoModule' },
  { path: 'login-consumidor', loadChildren: 'app/pages/login-consumidor/login-consumidor.module#LoginConsumidorModule' },
  { path: 'register-estabelecimento', loadChildren: 'app/pages/register-estabelecimento/register-estabelecimento.module#RegisterEstabelecimentoModule' },
  { path: 'register-estabelecimento-vendedor', loadChildren: 'app/pages/register-estabelecimento-vendedor/register-estabelecimento-vendedor.module#RegisterEstabelecimentoVendedorModule' },
  { path: 'register-consumidor', loadChildren: 'app/pages/register-consumidor/register-consumidor.module#RegisterConsumidorModule' },
  { path: 'redefinir-senha', loadChildren: 'app/pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaModule' },
  { path: 'sucesso-cadastro',  component: SucessoCadastroComponent},
  { path: 'ativa-cadastro',  component: AtivaCadastroComponent},
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});