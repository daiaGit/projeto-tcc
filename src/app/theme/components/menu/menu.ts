import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0),
    new Menu (2, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'Login Estabelecimento', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'Login Consumidor', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'Register Consumidor', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'Blank', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'Esqueci a senha', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),   
    new Menu (26, 'Redefinir Senha', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),,
    new Menu (27, 'Register Estabelecimento', '/register-estabelecimento', null, 'registered', null, false, 2),
    new Menu (28, 'Register Estabelecimento Vendedor', '/register-estabelecimento-vendedor', null, 'registered', null, false, 2) 
]

export const horizontalMenuItems = [
    new Menu (1, 'Dashboard', '/pages/dashboard', null, 'tachometer', null, false, 0), 
    new Menu (2, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'Login Estabelecimento', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'Login Consumidor', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'Register Consumidor', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'Blank', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'Esqueci a senha', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),
    new Menu (26, 'Redefinir Senha', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),
    new Menu (27, 'Register Estabelecimento', '/resgister-estabelecimento', null, 'exclamation-circle', null, false, 2),
    new Menu (28, 'Register Estabelecimento Vendedor', '/register-estabelecimento-vendedor', null, 'registered', null, false, 2)
]

export const verticalMenuShopItems = [ 
    new Menu (2, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'Login Estabelecimento', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'Login Consumidor', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'Register Consumidor', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'Blank', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'Esqueci a senha', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),   
    new Menu (26, 'Redefinir Senha', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),,
    new Menu (27, 'Register Estabelecimento', '/register-estabelecimento', null, 'registered', null, false, 2)
]

export const horizontalMenuShopItems = [
    new Menu (2, 'Pages', null, null, 'file-text-o', null, true, 0),
    new Menu (20, 'Login Estabelecimento', '/login-estabelecimento', null, 'sign-in', null, false, 2),
    new Menu (21, 'Login Consumidor', '/login-consumidor', null, 'sign-in', null, false, 2),          
    new Menu (22, 'Register Consumidor', '/register-consumidor', null, 'registered', null, false, 2),
    new Menu (23, 'Blank', '/pages/blank', null, 'file-o', null, false, 2),
    new Menu (24, 'Error', '/pagenotfound', null, 'exclamation-circle', null, false, 2),
    new Menu (25, 'Esqueci a senha', '/esqueci-senha', null, 'exclamation-circle', null, false, 2),
    new Menu (26, 'Redefinir Senha', '/redefinir-senha', null, 'exclamation-circle', null, false, 2),
    new Menu (27, 'Register Estabelecimento', '/resgister-estabelecimento', null, 'exclamation-circle', null, false, 2)
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