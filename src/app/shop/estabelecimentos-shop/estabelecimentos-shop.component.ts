import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

//Services
import { EstadoService } from 'app/services/estado.service';
import { CidadeService } from 'app/services/cidade.service';

@Component({
  selector: 'estabelecimentos-blank',
  templateUrl: './estabelecimentos-shop.component.html',
  styleUrls: ['./estabelecimentos-shop.component.scss'],
  providers:[
    EstadoService,
    CidadeService
  ],
  encapsulation: ViewEncapsulation.None
})
export class EstabelecimentosShopComponent implements OnInit {

  @ViewChild('openModal') openModal:ElementRef; 
  
  public estados:any = [];
  public estado:any = '';
  
  public cidades:any = [];
  public cidade:any = '';
  
  constructor(
    public estadoService: EstadoService,
    public cidadeService: CidadeService
  ) { }

  ngOnInit() { 
    this.openModal.nativeElement.click();
    this.listarEstados();
   }

   public listarEstados() {
    var msgErro: any = {
        item : '',
        descricao: ''
    };

    this.estadoService.listarTodos().subscribe(
        estados => {
            console.log(estados);
            this.estados = estados['estados'];
        },
        err => {
            msgErro.item = 'Erro ao listar Estados!';
            msgErro.descricao = err;
        }
    );
  }


    public listarCidades() {
                  var msgErro: any = {
          item : '',
          descricao: ''
};

      this.cidadeService.listarTodos(this.estado).subscribe(
          cidades => {
              this.cidades = cidades['cidades'];
          },
          err => {
              msgErro.item = 'Erro ao listar Cidades!';
              msgErro.descricao = err;
          });
  }

}
