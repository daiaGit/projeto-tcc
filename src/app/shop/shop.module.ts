import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { routing } from './shop.routing';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { HorizontalMenuComponent } from './../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './../theme/components/menu/vertical-menu/vertical-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    routing
  ],
  declarations: [
    ShopComponent
  ]
})
export class ShopModule { }
