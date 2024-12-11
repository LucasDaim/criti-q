import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  // Lista de tênis com avaliação inicial (avaliacao de 1 a 5)
  tenisList = [
    {
      nome: 'Tênis Nike Air Max',
      preco: 499.99,
      imagem: '/assets/airmax.jpeg',
      avaliacao: 3 // Avaliação inicial: 3 corações preenchidos
    },
    {
      nome: 'Tênis Adidas Ultraboost',
      preco: 699.90,
      imagem: '/assets/adidasultraboost.jpeg',
      avaliacao: 5 // Avaliação inicial: 5 corações preenchidos
    },
    {
      nome: 'Tênis Puma RS-X',
      preco: 399.90,
      imagem: '/assets/rsx.jpeg',
      avaliacao: 2 // Avaliação inicial: 2 corações preenchidos
    }
  ];

  // Função para obter o estado de cada coração
  getHearts(avaliacao: number): boolean[] {
    // Retorna um array de 5 valores (true ou false) para representar os corações preenchidos ou vazios
    return Array(5).fill(false).map((_, i) => i < avaliacao);
  }

  // Função de avaliação (incrementa ou diminui a avaliação)
  avaliarTenis(tenis: any, novaAvaliacao: number) {
    // Atualiza a avaliação do tênis com o valor clicado
    tenis.avaliacao = novaAvaliacao;
  }
}
