import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ShopComponent } from './shop.component';

export const routes: Routes = [
    {
        path: '', 
        component: ShopComponent,
        children:[
            { path:'', redirectTo:'estabelecimento-list', pathMatch:'full' },
            { path: 'estabelecimento-list', loadChildren: 'app/shop/estabelecimento/estabelecimento-list.module#EstabelecimentoListModule', data: { breadcrumb: 'Estabelecimento List' }  },          
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);