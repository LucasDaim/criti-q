import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  email: string = '';
  password: string = '';
  isRegistered: boolean = false;

  constructor(
    private rota: Router,
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async register() {
    const loading = await this.loadingController.create({
      message: 'Registrando...',
    });
    await loading.present();

    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      await loading.dismiss();
      this.isRegistered = true;
      this.showToast('Cadastro realizado com sucesso!');
      this.rota.navigateByUrl('/tabs'); // Redirecionar para a tela inicial ou de login
    } catch (error) {
      await loading.dismiss();
      const errorMessage = (error as Error)?.message || 'Erro desconhecido';
      this.showToast(`Erro ao registrar: ${errorMessage}`);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  redirecionar_login() {
    this.rota.navigateByUrl('/login');
  }

  ngOnInit() {}
}