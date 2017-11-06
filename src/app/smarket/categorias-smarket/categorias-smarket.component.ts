/** Angular */
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

/** Services */
import { FuncionarioService } from './../../services/funcionario.service';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from '../../theme/components/menu/menu.service';
import { CategoriaService } from 'app/services/categoria.service';

@Component({
  selector: 'app-categorias-smarket',
  templateUrl: './categorias-smarket.component.html',
  styleUrls: ['./categorias-smarket.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    FuncionarioService,
    CategoriaService
  ]
})

export class CategoriasSmarketComponent implements OnInit {
  public erros: Array<any> = [];
  public funcionarios: any[];

  public menuItems: Array<any>;

  public searchText: string;

  constructor(public fb: FormBuilder,
    public router: Router,
    public toastrService: ToastrService,
    public funcionarioService: FuncionarioService,
    public categoriaService: CategoriaService,
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

    this.getFuncionarios(1);
    this.getCategorias();

  }

  public getFuncionarios(idEstabelecimento): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.funcionarioService.getFuncionarioPorEstabeleciemento(idEstabelecimento).subscribe(
      funcionarios => {
        resp = funcionarios['response'];
        console.log(resp['status']);
        if (resp['status'] == 'true') {
          this.funcionarios = resp['objeto'];
          console.log(this.funcionarios);
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

  public getCategorias(): void {
    var resp: any;

    var msgErro: any = {
      item: '',
      descricao: ''
    };

    this.categoriaService.getCategorias().subscribe(
      categorias => {
        resp = categorias['response'];
        console.log(resp['status']);
        if (resp['status'] == 'true') {
          console.log(resp);
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

  public editarFuncionario(funcionario){   
      localStorage.setItem('categoria', JSON.stringify(funcionario));
      this.router.navigate(['smarket/categorias-smarket/categorias-smarket-create']);
  }

  public cadastrarFuncionario(){
    this.router.navigate(['smarket/categorias-smarket/categorias-smarket-create']);
  }

}





