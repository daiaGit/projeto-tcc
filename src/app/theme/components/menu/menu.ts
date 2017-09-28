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
    new Menu (3, 'Tables', null, null, 'table', null, true, 0),
    new Menu (30, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 3), 
    new Menu (31, 'Dynamic Tables', null, null, 'th-large', null, true, 3), 
    new Menu (310, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 31),
    new Menu (311, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 31)   
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
    new Menu (3, 'Tables', null, null, 'table', null, true, 0),
    new Menu (30, 'Basic Tables', '/pages/tables/basic-tables', null, 'th', null, false, 3), 
    new Menu (31, 'Dynamic Tables', null, null, 'th-large', null, true, 3), 
    new Menu (310, 'Smart DataTable', '/pages/tables/dynamic-tables/smart', null, 'caret-right', null, false, 31),
    new Menu (311, 'NGX DataTable', '/pages/tables/dynamic-tables/ngx', null, 'caret-right', null, false, 31)   
]