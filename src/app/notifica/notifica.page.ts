import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifica',
  templateUrl: 'notifica.page.html',
  styleUrls: ['notifica.page.scss']
})
export class NotificaPage implements OnInit {

  // Lista de notificações aleatórias de redes sociais
  notifications: string[] = [];

  ngOnInit() {
    this.generateNotifications();
  }

  // Função para gerar notificações aleatórias
  generateNotifications() {
    const randomNotifications = [
      'Você tem um novo seguidor!',
      'Comentaram na sua foto.',
      'Você foi marcado em uma foto.',
      'Seu post foi curtido por 50 pessoas.',
      'Alguém comentou: "Incrível!"',
      'Você tem um novo like em sua foto de perfil.',
      
    ];

    // Gerar um número aleatório de notificações para mostrar (por exemplo, entre 5 e 10)
    const notificationsCount = Math.floor(Math.random() * 6) + 5;
    this.notifications = [];

    // Adicionar notificações aleatórias ao array
    for (let i = 0; i < notificationsCount; i++) {
      const randomIndex = Math.floor(Math.random() * randomNotifications.length);
      this.notifications.push(randomNotifications[randomIndex]);
    }
  }
}
