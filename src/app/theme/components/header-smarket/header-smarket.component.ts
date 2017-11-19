import { Router } from '@angular/router';
import { AcessoService } from './../../../services/acesso.service';
import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-header-smarket',
  templateUrl: './header-smarket.component.html',
  styleUrls: ['./header-smarket.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    AcessoService
  ],
  animations: [
    trigger('showInfo', [
      state('1', style({ transform: 'rotate(180deg)' })),
      state('0', style({ transform: 'rotate(0deg)' })),
      transition('1 => 0', animate('400ms')),
      transition('0 => 1', animate('400ms'))
    ])
  ]
})

export class HeaderSmarketComponent implements OnInit {
  public showHorizontalMenu: boolean = true;
  public showInfoContent: boolean = false;
  public settings: Settings;
  public menuItems: Array<any>;
  public tipoPagina: any;

  constructor(  public appSettings: AppSettings, 
                public menuService: MenuService,
                public acessoService: AcessoService,
                public router: Router) {
    this.settings = this.appSettings.settings;
    this.menuItems = this.menuService.getHorizontalMenuSmarketItems();
  }

  ngOnInit() {
    if (window.innerWidth <= 768)
      this.showHorizontalMenu = false;
  }


  public closeSubMenus() {
    let menu = document.querySelector("#menu0");
    if (menu) {
      for (let i = 0; i < menu.children.length; i++) {
        let child = menu.children[i].children[1];
        if (child) {
          if (child.classList.contains('show')) {
            child.classList.remove('show');
            menu.children[i].children[0].classList.add('collapsed');
          }
        }
      }
    }
  }

  public sair(){
    this.acessoService.logoutAreaSmarket();
    this.router.navigate(['/login-smarket']);
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.showHorizontalMenu = false;
    }
    else {
      this.showHorizontalMenu = true;
    }
  }

}