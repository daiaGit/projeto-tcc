
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
  selector: 'app-funcionarios-adm',
  templateUrl: './funcionarios-adm.component.html',
  styleUrls: ['./funcionarios-adm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService, 
    FuncionarioService
  ]
})

export class FuncionariosAdmComponent implements OnInit {
  public erros: Array<any> = [];
  public funcionarios: any[];
  public funcionario: any = {
    usuario_id:"14",
    tipo_usuario_descricao:"Funcionario",
    funcionario_nome:"Julio",
    funcionario_sobrenome:"Cesar",
    funcionario_cpf:"43243343232",
    telefone_ddd:"19",
    telefone_numero:"11111111",
    cargo_descricao:"Repositor"
  };


  public menuItems: Array<any>;
  public users: any[];
  public user: any =         {
            id: 8,
            username: "michael.b",
            password: "michael123",
            profile: {
                name: "Michael",
                surname: "Blair",
                birthday: { day: 15, month: 11, year: 1978 },
                gender: "male",
                image: "assets/img/profile/michael.jpg"
            },
            work: {
                company: "Microsoft",
                position: "Software developer",
                salary: 50000
            },
            contacts:{
                email: "michael@microsoft.com",
                phone: "(267) 388-1637",
                address: "Pennsylvania, Philadelphia"
            },
            social: {
                facebook:"",
                twitter:"",
                google:""
            },
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2009-08-12T16:20:20.511Z",
                joinedDate: "2017-06-30T11:30:40.511Z"
            },
            menuIds: [] 
        };

  public searchText: string;
  public p: any;
  public type: string = 'grid';
  public modalRef: NgbModalRef;
  public form: FormGroup;
  public genders = ['male', 'female'];
  public genderOption: string;

  public menuSelectSettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-secondary btn-block',
    dynamicTitleMaxItems: 0,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll: true
  };

  public menuSelectTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'menu item selected',
    checkedPlural: 'menu items selected',
    searchPlaceholder: 'Find menu item...',
    defaultTitle: 'Select menu items for user',
    allSelected: 'All selected',
  };

  public menuSelectOptions: IMultiSelectOption[] = [];

  constructor(public fb: FormBuilder,
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
      this.menuSelectOptions.push(menu);
    })

  }

  ngOnInit() {

    this.getFuncionarios(1);  

    this.getUsers();
    
    this.form = this.fb.group({
      id: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      profile: this.fb.group({
        name: null,
        surname: null,
        birthday: null,
        gender: null,
        image: null
      }),
      work: this.fb.group({
        company: null,
        position: null,
        salary: null
      }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null
      }),
      menuIds: null
    });
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
        if(resp['status'] == 'true'){
          this.funcionarios = resp['objeto'];
          console.log(this.funcionarios);         
        }
        else{
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

  public getUsers(): void {

      
  }

  public addUser(user: any) {

  }

  public updateUser(user: any) {

  }

  public deleteUser(user: any) {

  }

  public toggle(type) {
    this.type = type;
  }

  public openMenuAssign(event) {
    let parent = event.target.parentNode;
    while (parent) {
      parent = parent.parentNode;
      if (parent.classList.contains('content')) {
        parent.classList.add('flipped');
        parent.parentNode.parentNode.classList.add('z-index-1');
        break;
      }
    }
  }

  public closeMenuAssign(event) {
    let parent = event.target.parentNode;
    while (parent) {
      parent = parent.parentNode;
      if (parent.classList.contains('content')) {
        parent.classList.remove('flipped');
        parent.parentNode.parentNode.classList.remove('z-index-1');
        break;
      }
    }
  }

  public assignMenuItemsToUser(user) {
    this.updateUser(user);
    sessionStorage.setItem('userMenuItems', JSON.stringify(user.menuIds));
    this.toastrService.success('Please, logout and login to see result.', 'Successfully assigned !');
  }

  public openModal(modalContent, user) {
    if (user) {
      this.user = user;
      this.form.setValue(user);
      this.genderOption = user.profile.gender;
    }
    else {
      this.user = null;
      this.user.profile = null;
      this.user.work = null;
      this.user.contacts = null;
      this.user.social = null;
      this.user.settings = null;
    }
    this.modalRef = this.modalService.open(modalContent, { container: '.app' });

    this.modalRef.result.then((result) => {
      this.form.reset();
      this.genderOption = null;
    }, (reason) => {
      this.form.reset();
      this.genderOption = null;
    });
  }

  public closeModal() {
    this.modalRef.close();
  }

  public onSubmit(user: any): void {
    if (this.form.valid) {
      if (user.id) {
        this.updateUser(user);
      }
      else {
        this.addUser(user);
      }
      this.modalRef.close();
    }
  }

}
