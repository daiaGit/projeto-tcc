import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdmComponent } from './adm.component';

export const routes: Routes = [
    {
        path: '', 
        component: AdmComponent,
        children:[
            { path:'', redirectTo:'dashboard-adm', pathMatch:'full' },
            { path: 'brindes-adm', loadChildren: 'app/adm/brindes-adm/brindes-adm.module#BrindesAdmModule', data: { breadcrumb: 'Meus Brindes' }  },   
            { path: 'funcionarios-adm', loadChildren: 'app/adm/funcionarios-adm/funcionarios-adm.module#FuncionariosAdmModule', data: { breadcrumb: 'Meus Funcionários' }  },   
            { path: 'lotes-adm', loadChildren: 'app/adm/lotes-adm/lotes-adm.module#LotesAdmModule', data: { breadcrumb: 'Meus Lotes' }  },   
            { path: 'marcas-adm', loadChildren: 'app/adm/marcas-adm/marcas-adm.module#MarcasAdmModule', data: { breadcrumb: 'Minhas Marcar' }  },
            { path: 'produtos-adm', loadChildren: 'app/adm/produtos-adm/produtos-adm.module#ProdutosAdmModule', data: { breadcrumb: 'Meus Produtos' }  }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);





