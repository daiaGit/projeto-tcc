import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ShopComponent } from './shop.component';

export const routes: Routes = [
    {
        path: '', 
        component: ShopComponent,
        children:[
            { path:'', redirectTo:'produtos-shop', pathMatch:'full' },
            { path: 'produtos-shop', loadChildren: 'app/shop/produtos-shop/produtos-shop.module#ProdutosShopModule', data: { breadcrumb: 'Produtos Shop' }  },   
            { path: 'pedidos-shop', loadChildren: 'app/shop/pedidos-shop/pedidos-shop.module#PedidosShopModule', data: { breadcrumb: 'Meus Pedidos' }  },   
            { path: 'estabelecimentos-shop', loadChildren: 'app/shop/estabelecimentos-shop/estabelecimentos-shop.module#EstabelecimentosShopModule', data: { breadcrumb: 'Estabelecimentos Shop' }  },   
            { path: 'favoritos-shop', loadChildren: 'app/shop/favoritos-shop/favoritos-shop.module#FavoritosShopModule', data: { breadcrumb: 'Favoritos Shop' }  },
            { path: 'membership', loadChildren: 'app/shop/membership/membership.module#MembershipModule', data: { breadcrumb: 'Estabelecimentos' }  }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);