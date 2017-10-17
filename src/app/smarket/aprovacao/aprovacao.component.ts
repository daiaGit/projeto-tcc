import { Component, ViewEncapsulation } from '@angular/core';
import { Mail, AprovacaoService } from './aprovacao.service';

@Component({
  selector: 'app-aprovacao',
  templateUrl: './aprovacao.component.html',
  styleUrls: ['./aprovacao.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[ AprovacaoService ]
})
export class AprovacaoComponent {

  public mails: Array<any>;
  public mail: any;
  public newMail: boolean;
  public type:string = 'all';
  public searchText: string;

  constructor(private aprovacaoService: AprovacaoService) { }

  ngOnInit() {
      this.getMails();        
  }

  public getMails(){
      switch (this.type) {
          case 'all': 
              this.mails = this.aprovacaoService.getAllMails();
              break;
          case 'starred':
              this.mails =  this.aprovacaoService.getStarredMails();
              break;
          case 'sent':
              this.mails =  this.aprovacaoService.getSentMails();
              break;
          case 'drafts':
              this.mails =  this.aprovacaoService.getDraftMails();
              break;
          case 'trash':
              this.mails =  this.aprovacaoService.getTrashMails();
              break;
          default:
              this.mails =  this.aprovacaoService.getDraftMails();
      }  
  }

  public viewDetail(mail){
      this.mail = this.aprovacaoService.getMail(mail.id);    
      this.mails.forEach(m => m.selected = false);
      this.mail.selected = true;
      this.mail.unread = false;
      this.newMail = false;
  }

  public compose(){
      this.mail = null;
      this.newMail = true;
  }

  public setAsRead(){
      this.mail.unread = false;
  }

  public setAsUnRead(){
      this.mail.unread = true;
  }

  public delete() {
      this.mail.trash = true;
      this.mail.sent = false;
      this.mail.draft = false; 
      this.mail.starred = false; 
      this.getMails(); 
      this.mail = null;
  }

  public changeStarStatus() {       
      this.mail.starred = !this.mail.starred;
      this.getMails(); 
  }

  public restore(){
      this.mail.trash = false;
      this.type = 'all';
      this.getMails();
      this.mail = null; 
  }

}