import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-flags-menu',
  templateUrl: './flags-menu.component.html',
  styleUrls: ['./flags-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {

  public idiomaSelecionado: any;
  public translate: TranslateService;
  public browserLang: string = this.translate.getBrowserLang();

  constructor() {
    this.idiomaSelecionado =  this.browserLang.match(/en|pt-BR|es|fr/) ? this.browserLang : 'pt-BR';
  }

  ngOnInit() {
  }

  public alterarIdioma(idioma) {
    this.idiomaSelecionado = idioma;
    this.translate.use(this.idiomaSelecionado);
  }

}

