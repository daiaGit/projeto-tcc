import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdmComponent } from './adm.component';

export const routes: Routes = [
    {
        path: '', 
        component: AdmComponent,
        children:[
            { 
                path:'', redirectTo:'dashboard-adm', pathMatch:'full' 
            },
            { 
                path: 'dashboard-adm', 
                loadChildren: 'app/adm/dashboard-adm/dashboard-adm.module#DashboardAdmModule', 
                data: { breadcrumb: 'Dashboard' } 
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);