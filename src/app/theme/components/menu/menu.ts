import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'DASHBOARD', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'LOGIN-ESTABELECIMENTO', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'LOGIN-CONSUMIDOR', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'CADASTRAR-CONSUMIDOR', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'PAGINA-BRANCO', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'PAGINA-ERRO', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'ESQUECI-SENHA', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),   
    new Menu (26, 'REDEFINIR-SENHA', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),,
    new Menu (27, 'CADASTRAR-ESTABELECIMENTO', '/register-estabelecimento', null, 'registered', null, false, 2),
    new Menu (28, 'CADASTRAR-ESTABELECIMENTO-VENDEDOR', '/register-estabelecimento-vendedor', null, 'registered', null, false, 2) 
]

export const horizontalMenuItems = [

    new Menu (2, 'PAGES', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'LOGIN-ESTABELECIMENTO', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'LOGIN-CONSUMIDOR', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'CADASTRAR-CONSUMIDOR', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'PAGINA-BRANCO', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'PAGINA-ERRO', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'ESQUECI-SENHA', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),   
    new Menu (26, 'REDEFINIR-SENHA', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),,
    new Menu (27, 'CADASTRAR-ESTABELECIMENTO', '/register-estabelecimento', null, 'registered', null, false, 2),
    new Menu (28, 'CADASTRAR-ESTABELECIMENTO-VENDEDOR', '/register-estabelecimento-vendedor', null, 'registered', null, false, 2) 
]

export const verticalMenuShopItems = [ 
    new Menu (1, 'Meus Favoritos', '/shop/estabelecimentos', null, 'tachometer', null, false, 0),
    new Menu (2, 'Minha Conta', '/shop/produtos-shop', null, 'tachometer', null, false, 0),
    new Menu (3, 'Meus Pedidos', '/shop/pedidos-shop', null, 'tachometer', null, false, 0),
    new Menu (4, 'Estabelecimento', '/shop/membership', null, 'tachometer', null, false, 0)
]

export const horizontalMenuShopItems = [
    new Menu (1, 'Meus Favoritos', '/shop/estabelecimentos', null, 'tachometer', null, false, 0),
    new Menu (2, 'Minha Conta', '/shop/produtos-shop', null, 'tachometer', null, false, 0),
    new Menu (3, 'Meus Pedidos', '/shop/pedidos-shop', null, 'tachometer', null, false, 0),
    new Menu (4, 'Estabelecimento', '/shop/membership', null, 'tachometer', null, false, 0)
]

export const verticalMenuEstabelecimentoItems = [ 
    new Menu (1, 'Tables', null, null, 'table', null, true, 0),
    new Menu (10, 'Basic Tables', '/adm/tables/basic-tables', null, 'th', null, false, 1), 
    new Menu (11, 'Dynamic Tables', null, null, 'th-large', null, true, 1), 
    new Menu (110, 'Smart DataTable', '/adm/tables/dynamic-tables/smart', null, 'caret-right', null, false, 11),
    new Menu (111, 'NGX DataTable', '/adm/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 11)   
]

export const horizontalMenuEstabelecimentoItems = [
    new Menu (1, 'Tables', null, null, 'table', null, true, 0),
    new Menu (10, 'Basic Tables', '/adm/tables/basic-tables', null, 'th', null, false, 1), 
    new Menu (11, 'Dynamic Tables', null, null, 'th-large', null, true, 1), 
    new Menu (110, 'Smart DataTable', '/adm/tables/dynamic-tables/smart', null, 'caret-right', null, false, 11),
    new Menu (111, 'NGX DataTable', '/adm/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 11)   
]

export const verticalMenuSmarketItems = [ 
    new Menu (1, 'Aprovacao', '/smarket/aprovacao', null, 'tachometer', null, false, 0),
]

export const horizontalMenuSmarketItems = [
    new Menu (1, 'Aprovacao', '/smarket/aprovacao', null, 'tachometer', null, false, 0),
]