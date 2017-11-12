import { AdmAuthGuard } from './../guards/adm-auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdmComponent } from './adm.component';

export const routes: Routes = [
    {
        path: '', 
        component: AdmComponent,
        children:[
            {   
                path:'', 
                redirectTo:'dashboard-adm', 
                pathMatch:'full',  
            },
            {   
                path: 'brindes-adm', 
                loadChildren: 'app/adm/brindes-adm/brindes-adm.module#BrindesAdmModule',
                data: { breadcrumb: 'Meus Brindes' } 
             },   
            {   path: 'funcionarios-adm', 
                loadChildren: 'app/adm/funcionarios-adm/funcionarios-adm.module#FuncionariosAdmModule',
                data: { breadcrumb: 'Meus Funcionários' }  
            },   
            { 
                path: 'lotes-adm', 
                loadChildren: 'app/adm/lotes-adm/lotes-adm.module#LotesAdmModule',
                data: { breadcrumb: 'Meus Lotes' }  
            }  

       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);





