import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Pipes */
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { ChatPersonSearchPipe } from './search/chat-person-search.pipe';
import { UserSearchPipe } from './search/user-search.pipe';
import { FuncionarioSearchPipe } from './search/funcionario-search.pipe';
import { EstabelecimentoSearchPipe } from './search/estabelecimento-search.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { LoteSearchPipe } from './search/lote-search.pipe';
import { ProdutoSearchPipe } from './search/produto-search.pipe';
import { CnpjFormatPipe } from 'app/theme/pipes/format/cnpj-format.pipe';
import { CpfFormatPipe } from 'app/theme/pipes/format/cpf-format.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        FuncionarioSearchPipe,
        ProdutoSearchPipe,
        LoteSearchPipe,
        EstabelecimentoSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        CnpjFormatPipe,
        CpfFormatPipe
    ],
    exports: [
        ProfilePicturePipe,
        ChatPersonSearchPipe,
        UserSearchPipe,
        FuncionarioSearchPipe,
        ProdutoSearchPipe,
        LoteSearchPipe,
        EstabelecimentoSearchPipe,
        TruncatePipe,
        MailSearchPipe,
        CnpjFormatPipe,
        CpfFormatPipe
    ]
})
export class PipesModule { }
