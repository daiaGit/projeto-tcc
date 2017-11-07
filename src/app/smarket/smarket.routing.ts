import { SmarketAuthGuard } from './../guards/smarket-auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SmarketComponent } from './smarket.component';

export const routes: Routes = [
    {
        path: '', 
        component: SmarketComponent,
        canActivate: [SmarketAuthGuard],
        children:[
            { 
                path:'', 
                redirectTo:'dashboard-smarket',
                canActivate: [SmarketAuthGuard], 
                pathMatch:'full' 
            },
            { 
                path: 'dashboard-smarket', 
                loadChildren: 'app/smarket/dashboard-smarket/dashboard-smarket.module#DashboardSmarketModule',
                canActivate: [SmarketAuthGuard],
                data: { breadcrumb: 'Dashboard' }  
            },          
            { 
                path: 'aprovacao', 
                loadChildren: 'app/smarket/aprovacao/aprovacao.module#AprovacaoModule',
                canActivate: [SmarketAuthGuard],
                data: { breadcrumb: 'Aprovação' }  
            },
            { 
                path: 'categorias-smarket', 
                loadChildren: 'app/smarket/categorias-smarket/categorias-smarket.module#CategoriasSmarketModule', 
                canActivate: [SmarketAuthGuard],
                data: { breadcrumb: 'Categorias' }  
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);