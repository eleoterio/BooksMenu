import { Component } from '@angular/core';

import { FavoritoPage } from '../favorito/favorito';
import { CarrinhoPage } from '../carrinho/carrinho';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = FavoritoPage;
	tab3Root = CarrinhoPage;
	tab4Root = CadastroPage;

	constructor() {
	}
}
