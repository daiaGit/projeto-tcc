/** Angular */
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

/** Services */

import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../theme/components/menu/menu.service';
import { ProdutoService } from './../../services/produto.service';


@Component({
  selector: 'app-lotes-adm',
  templateUrl: './lotes-adm.component.html',
  styleUrls: ['./lotes-adm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    ProdutoService
  ]
})

export class LotesAdmComponent implements OnInit {
  public erros: Array<any> = [];
  public lotes: any[];
  public p: any;
  public file: any;

  public menuItems: Array<any>;

  public searchText: string;

  constructor(public fb: FormBuilder,
    public router: Router,
    public toastrService: ToastrService,
    public produtoService: ProdutoService,
    public menuService: MenuService,
    public modalService: NgbModal) {

    this.menuItems = this.menuService.getVerticalMenuItems();
    this.menuItems.forEach(item => {
      let menu = {
        id: item.id,
        name: item.title
      }
    })

  }

  ngOnInit() {

    this.getLotes();

  }

  public getLotes(): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.produtoService.getLotesByEstabelecimento().subscribe(
      lotes => {
        resp = lotes['response'];
        if (resp['status'] == 'true') {
          this.lotes = resp.objeto;
          console.log(this.lotes);
        }
        else {
          msgErro.item = 'Erro ao buscar funcionários!';
          msgErro.descricao = resp.descricao;
          this.erros.push(msgErro);
        }
      },
      err => {
        msgErro.item = 'Erro ao buscar funcionários!';
        msgErro.descricao = err;
        this.erros.push(msgErro);
      }
    );
  }

  public editarProduto(produto) {
    localStorage.setItem('produto', JSON.stringify(produto));
    this.router.navigate(['adm/lotes-adm/lotes-adm-edit']);
  }

  public cadastrarLotes() {
    this.router.navigate(['adm/lotes-adm/lotes-adm-create']);
  }

  public importarPlanilhalotes() {

  }

  fileChange(input) {
    const reader = new FileReader();
    if (input.files.length) {
      const file = input.files[0];
      reader.onload = () => {
        this.file = reader.result;
      }
      reader.readAsDataURL(file);
      
    }
  }

  enviarArquivo(){
    var resp: any;
    
        var msgErro: any = {
          item: '',
          descricao: ''
        };
    
        this.produtoService.doUploadProduto(this.file).subscribe(
          lotesUpload => {
            resp = lotesUpload['response'];
            if (resp['status'] == 'true') {
              console.log(resp);
            }
            else {
              msgErro.item = 'Erro ao importar Planilha lotes!';
              msgErro.descricao = resp.descricao;
              this.erros.push(msgErro);
            }
          },
          err => {
            msgErro.item = 'Erro ao importar Planilha lotes!';
            msgErro.descricao = err;
            this.erros.push(msgErro);
          }
        );
  }

  removeFile(): void {
    this.file = '';
  }

}





