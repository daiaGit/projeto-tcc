import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SmarketComponent } from './smarket.component';

export const routes: Routes = [
    {
        path: '', 
        component: SmarketComponent,
        children:[
            { path:'', redirectTo:'dashboard-smarket', pathMatch:'full' },
            { path: 'dashboard-smarket', loadChildren: 'app/smarket/dashboard-smarket/dashboard-smarket.module#DashboardSmarketModule', data: { breadcrumb: 'Dashboard' }  },          
            { path: 'aprovacao', loadChildren: 'app/smarket/aprovacao/aprovacao.module#AprovacaoModule', data: { breadcrumb: 'Aprovação' }  },
            { path: 'categoria', loadChildren: 'app/smarket/categoria/categoria.module#CategoriaModule', data: { breadcrumb: 'Categoria' }  }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);