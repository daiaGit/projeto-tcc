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
            { path: 'carrinho-shop', loadChildren: 'app/shop/carrinho-shop/carrinho-shop.module#CarrinhoShopModule', data: { breadcrumb: 'Carrinho Shop' }  },
            { path: 'meu-perfil-pf', loadChildren: 'app/shop/meu-perfil-pf/meu-perfil-pf.module#MeuPerfilPFModule', data: { breadcrumb: 'Meu Perfil' }  }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);