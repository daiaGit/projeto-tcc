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
  selector: 'app-produtos-adm',
  templateUrl: './produtos-adm.component.html',
  styleUrls: ['./produtos-adm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    ProdutoService
  ]
})

export class ProdutosAdmComponent implements OnInit {
  public erros: Array<any> = [];
  public produtos: any[];
  public p: any;
  public file: any;

  public menuItems: Array<any>;

  public searchText: string;

  constructor(public fb: FormBuilder,
    public router: Router,
    public toastrService: ToastrService,
    public produtosService: ProdutoService,
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

    this.getProdutos();

  }

  public getProdutos(): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.produtosService.getProdutosByEstabelecimento().subscribe(
      produtos => {
        resp = produtos['response'];
        if (resp['status'] == 'true') {
          this.produtos = resp.objeto;
          console.log(this.produtos);
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
    this.router.navigate(['adm/produtos-adm/produtos-edit']);
  }

  public cadastrarProdutos() {
    this.router.navigate(['adm/produtos-adm/produtos-create']);
  }

  public importarPlanilhaProdutos() {

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
    
        this.produtosService.doUploadProduto(this.file).subscribe(
          produtosUpload => {
            resp = produtosUpload['response'];
            if (resp['status'] == 'true') {
              console.log(resp);
            }
            else {
              msgErro.item = 'Erro ao importar Planilha Produtos!';
              msgErro.descricao = resp.descricao;
              this.erros.push(msgErro);
            }
          },
          err => {
            msgErro.item = 'Erro ao importar Planilha Produtos!';
            msgErro.descricao = err;
            this.erros.push(msgErro);
          }
        );
  }

  removeFile(): void {
    this.file = '';
  }

}





