import { AdmAuthGuard } from './../guards/adm-auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdmComponent } from './adm.component';

export const routes: Routes = [
    {
        path: '',
        component: AdmComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard-adm',
                pathMatch: 'full',
            },
            {
                path: 'brindes-adm',
                loadChildren: 'app/adm/brindes-adm/brindes-adm.module#BrindesAdmModule',
                data: { breadcrumb: 'Meus Brindes' }
            },
            {
                path: 'funcionarios-adm',
                loadChildren: 'app/adm/funcionarios-adm/funcionarios-adm.module#FuncionariosAdmModule',
                data: { breadcrumb: 'Meus Funcionários' }
            },
            {
                path: 'lotes-adm',
                loadChildren: 'app/adm/lotes-adm/lotes-adm.module#LotesAdmModule',
                data: { breadcrumb: 'Meus Lotes' }
            },
            {
                path: 'produtos-adm',
                loadChildren: 'app/adm/produtos-adm/produtos-adm.module#ProdutosAdmModule',
                data: { breadcrumb: 'Meus Produtos' }
            },
            {
                path: 'formas-entrega',
                loadChildren: 'app/adm/formas-entrega/formas-entrega.module#FormasEntregaModule',
                data: { breadcrumb: 'Formas de Pagamento' }
            },
            {
                path: 'formas-pagamento',
                loadChildren: 'app/adm/formas-pagamento/formas-pagamento.module#FormasPagamentoModule',
                data: { breadcrumb: 'Formas de Entrega' }
            }

        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);





