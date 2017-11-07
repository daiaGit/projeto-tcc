import { PipesModule } from './../theme/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { FullScreenComponent } from 'app/theme/components/fullscreen/fullscreen.component';
import { FavoritesComponent } from './../theme/components/favorites/favorites.component';
import { BlankComponent } from './../pages/blank/blank.component';
import { SideChatComponent } from './../theme/components/side-chat/side-chat.component';
import { FlagsMenuComponent } from './../theme/components/flags-menu/flags-menu.component';
import { MessagesComponent } from './../theme/components/messages/messages.component';
import { ApplicationsComponent } from './../theme/components/applications/applications.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    TranslateModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    FlagsMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    FlagsMenuComponent,
    TranslateModule
  ]
})
export class SharedModule { }
