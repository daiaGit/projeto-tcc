import { AdmAuthGuard } from './guards/adm-auth.guard';
import { SmarketAuthChildGuard } from 'app/guards/smarket-auth-child.guard';
import { SmarketAuthGuard } from './guards/smarket-auth.guard';

import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/** App Componentes */
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SucessoCadastroComponent } from './pages/sucesso/sucesso-cadastro.component';
import { AtivaCadastroComponent } from './pages/ativa-cadastro/ativa-cadastro.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'landing-page', 
    pathMatch: 'full' },
  { 
    path: 'login-shop', 
    loadChildren: 'app/shop/login-shop/login-shop.module#LoginShopModule' },
  { 
    path: 'login-adm', 
    loadChildren: 'app/adm/login-adm/login-adm.module#LoginAdmModule' },
  { 
    path: 'login-smarket',
     loadChildren: 'app/smarket/login-smarket/login-smarket.module#LoginSmarketModule' },
  { 
    path: 'landing-page', 
    loadChildren: 'app/pages/landing-page/landing-page.module#LandingPageModule' },  
  { 
    path: 'pages', 
    loadChildren: 'app/pages/pages.module#PagesModule' },
  { 
    path: 'shop',
    loadChildren: 'app/shop/shop.module#ShopModule' },
  { 
    path: 'adm', 
    loadChildren: 'app/adm/adm.module#AdmModule',
    canActivate: [AdmAuthGuard]  
  },    
  { 
    path: 'smarket', 
    loadChildren: 'app/smarket/smarket.module#SmarketModule', 
    canActivate: [SmarketAuthGuard]    
  },
  { 
    path: 'esqueci-minha-senha', 
    loadChildren: 'app/pages/esqueci-minha-senha/esqueci-minha-senha.module#EsqueciMinhaSenhaModule' },
  { 
    path: 'redefinir-minha-senha', 
    loadChildren: 'app/pages/redefinir-minha-senha/redefinir-minha-senha.module#RedefinirMinhaSenhaModule' },
  { 
    path: 'register-estabelecimento', 
    loadChildren: 'app/pages/register-estabelecimento/register-estabelecimento.module#RegisterEstabelecimentoModule' },
  { 
    path: 'register-estabelecimento-vendedor', 
    loadChildren: 'app/pages/register-estabelecimento-vendedor/register-estabelecimento-vendedor.module#RegisterEstabelecimentoVendedorModule' },
  { 
    path: 'register-consumidor', 
    loadChildren: 'app/pages/register-consumidor/register-consumidor.module#RegisterConsumidorModule' },
  { 
    path: 'redefinir-senha', 
    loadChildren: 'app/pages/redefinir-senha/redefinir-senha.module#RedefinirSenhaModule' },
  { 
    path: 'sucesso-cadastro',  
    component: SucessoCadastroComponent
  },
  { 
    path: 'ativa-cadastro',  
    component: AtivaCadastroComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});