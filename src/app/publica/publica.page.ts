import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Para exibir mensagens de toast
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; // Para selecionar imagens

// Restante do código


@Component({
  selector: 'app-publica',
  templateUrl: 'publica.page.html',
  styleUrls: ['publica.page.scss'],
})
export class PublicaPage {
  postMessage: string = ''; // Armazena a mensagem do post
  image: string | null = null; // Armazena a URL da imagem selecionada

  constructor(private toastController: ToastController) {}

  // Função para escolher uma imagem
  async uploadImage() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl, // Recebe a imagem em formato de URL de dados
      source: CameraSource.Photos, // Permite ao usuário escolher da galeria
      quality: 90, // Qualidade da imagem
    });

    if (image.dataUrl) {
      this.image = image.dataUrl; // Armazena a URL da imagem, se não for undefined
    } else {
      this.image = null; // Ou atribua null se for undefined
    }
    
  }

  // Função para publicar o post
  async publishPost() {
    if (!this.postMessage.trim() && !this.image) {
      // Verifica se há uma mensagem ou imagem para publicar
      const toast = await this.toastController.create({
        message: 'Você precisa escrever uma mensagem ou selecionar uma imagem.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
      return;
    }

    // Aqui você pode enviar os dados para um servidor ou banco de dados
    const post = {
      message: this.postMessage,
      image: this.image,
      timestamp: new Date().toISOString(),
    };

    // Exemplo de como enviar para uma API (descomente e adapte para o seu caso)
    // this.apiService.post('posts', post).subscribe(response => {
    //   this.toastController.create({
    //     message: 'Post publicado com sucesso!',
    //     duration: 2000,
    //     color: 'success',
    //   }).then(toast => toast.present());
    // });

    // Limpar campos após publicar
    this.postMessage = '';
    this.image = null;

    // Exibir um toast informando que o post foi publicado
    const toast = await this.toastController.create({
      message: 'Post publicado com sucesso!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
