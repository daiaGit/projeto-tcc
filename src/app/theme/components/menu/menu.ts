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
    new Menu (4, 'Estabelecimento', '/shop/estabelecimentos-shop', null, 'tachometer', null, false, 0),
    new Menu (5, 'Carrinho', '/shop/carrinho-shop', null, 'tachometer', null, false, 0),
    new Menu (6, 'Favoritos', '/shop/favoritos-shop', null, 'tachometer', null, false, 0),
    new Menu (7, 'Meu Perfil', '/shop/meu-perfil', null, 'tachometer', null, false, 0),
]

export const horizontalMenuShopItems = [
    //new Menu (1, 'Meus Favoritos', '/shop/estabelecimentos', null, 'tachometer', null, false, 0),
    new Menu (2, 'Meus Produtos', '/shop/produtos-shop', null, 'shopping-basket', null, false, 0),
    new Menu (3, 'Meus Pedidos', '/shop/pedidos-shop', null, 'check-circle', null, false, 0),
    new Menu (4, 'Estabelecimento', '/shop/estabelecimentos-shop', null, 'building', null, false, 0),
    new Menu (5, 'Carrinho', '/shop/carrinho-shop', null, 'shopping-cart', null, false, 0),
    new Menu (6, 'Favoritos', '/shop/favoritos-shop', null, 'star', null, false, 0),
    new Menu (7, 'Meu Perfil', '/shop/meu-perfil-pf', null, 'user-circle', null, false, 0),
]

export const verticalMenuEstabelecimentoItems = [ 
    new Menu (1, 'Meu Estabelecimento', null, null, 'building', null, true, 0),
    new Menu (10, 'Funcionários', '/adm/funcionarios-adm', null, 'user', null, false, 1),
    new Menu (11, 'Estabelecimento', '/adm/estabelecimento-adm', null, 'cog', null, false, 1),
    new Menu (2, 'Minha Loja', null, null, 'briefcase', null, true, 0),
    new Menu (20, 'Produtos', '/adm/produtos-adm', null, 'circle', null, false, 2),
    new Menu (21, 'Lotes', '/adm/lotes-adm', null, 'archive', null, false, 2),
    new Menu (22, 'Formas Entrega', '/adm/formas-pagamento', null, 'truck', null, false, 2),
    new Menu (23, 'Formas Pagamento', '/adm/formas-entrega', null, 'credit-card', null, false, 2),
    new Menu (3, 'Charts', null, null, 'area-chart', null, true, 0),
    new Menu (30, 'Bar Charts', '/adm/charts/bar', null, 'bar-chart', null, false, 3),
    new Menu (31, 'Pie Charts', '/adm/charts/pie', null, 'pie-chart', null, false, 3),
    new Menu (4, 'Pedidos', null, null, 'bell', null, true, 0),
    new Menu (5, 'Relatórios', null, null, 'edit', null, true, 0)
]

export const horizontalMenuEstabelecimentoItems = [
    new Menu (1, 'Meu Estabelecimento', null, null, 'area-chart', null, true, 0),
    new Menu (10, 'Funcionários', '/adm/funcionarios-adm', null, 'tachometer', null, false, 1),
    new Menu (11, 'Estabelecimento', '/adm/estabelecimento-adm', null, 'tachometer', null, false, 1),
    new Menu (2, 'Minha Loja', null, null, 'area-chart', null, true, 0),
    new Menu (20, 'Produtos', '/adm/produtos-adm', null, 'tachometer', null, false, 2),
    new Menu (21, 'Lotes', '/adm/lotes-adm', null, 'tachometer', null, false, 2),
    new Menu (22, 'Formas Entrega', '/adm/formas-pagamento', null, 'tachometer', null, false, 2),
    new Menu (23, 'Formas Pagamento', '/adm/formas-entrega', null, 'tachometer', null, false, 2),
    new Menu (3, 'Charts', null, null, 'area-chart', null, true, 0),
    new Menu (30, 'Bar Charts', '/adm/charts/bar', null, 'bar-chart', null, false, 3),
    new Menu (31, 'Pie Charts', '/adm/charts/pie', null, 'pie-chart', null, false, 3),
    new Menu (4, 'Pedidos', null, null, 'area-chart', null, true, 0),
    new Menu (5, 'Relatórios', null, null, 'area-chart', null, true, 0)
]

export const verticalMenuSmarketItems = [ 
    new Menu (1, 'Aprovacao', '/smarket/aprovacao', null, 'tachometer', null, false, 0),
    new Menu (2, 'Categorias', '/smarket/categorias-smarket', null, 'tachometer', null, false, 0),
]

export const horizontalMenuSmarketItems = [
    new Menu (1, 'Aprovacao', '/smarket/aprovacao', null, 'tachometer', null, false, 0),
    new Menu (2, 'Categorias', '/smarket/categorias-smarket', null, 'tachometer', null, false, 0),
]

export const verticalMenuSmarketDoacaoItems = [ 

]

export const horizontalMenuSmarketDoacaoItems = [

]

export const verticalMenuSmarketZeroItems = [ 

]

export const horizontalMenuSmarketZeroItems = [

]
