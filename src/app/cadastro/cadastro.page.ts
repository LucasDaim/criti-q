import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private auth: Auth
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Método para enviar o formulário
  async onSubmit() {
    if (this.cadastroForm.valid) {
      const { email, senha } = this.cadastroForm.value;
      try {
        const userCredential = await createUserWithEmailAndPassword(this.auth, email, senha); 
        console.log('Usuário cadastrado com sucesso!', userCredential);
        this.navCtrl.navigateForward('/tabs'); 
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
    } else {
      console.log('Formulário inválido');
    }
  }
}