import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  // Dados do usuário (simulando dados estáticos aqui, mas podem vir de uma API)
  user = {
    name: 'User',   // Nome do usuário
    profileImage: 'assets/user.png', // Caminho da imagem do perfil
    followers: 1200,       // Número de seguidores
    following: 150       // Número de pessoas que o usuário está seguindo
  };

  constructor() { }

  ngOnInit() {
    // Aqui você pode buscar os dados do usuário em uma API, se necessário
  }

}
