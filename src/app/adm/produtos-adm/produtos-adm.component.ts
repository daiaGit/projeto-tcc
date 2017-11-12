
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

@Component({
  selector: 'app-produtos-adm',
  templateUrl: './produtos-adm.component.html',
  styleUrls: ['./produtos-adm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    FuncionarioService
  ]
})

export class ProdutosAdmComponent implements OnInit {
  public erros: Array<any> = [];
  public funcionarios: any[];
  public p:any;

  public menuItems: Array<any>;

  public searchText: string;

  constructor(public fb: FormBuilder,
    public router: Router,
    public toastrService: ToastrService,
    public funcionarioService: FuncionarioService,
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

  public editarFuncionario(funcionario){   
      localStorage.setItem('funcionario', JSON.stringify(funcionario));
      this.router.navigate(['adm/funcionarios-adm/funcionarios-edit']);
  }

  public cadastrarFuncionario(){
    this.router.navigate(['adm/funcionarios-adm/funcionarios-create']);
  }

}





