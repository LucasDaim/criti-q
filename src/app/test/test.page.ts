import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  cadastroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.cadastroForm.valid) {
      const { nome, usuario, email, senha } = this.cadastroForm.value;
      console.log('Cadastro realizado com sucesso!', { nome, usuario, email, senha });
      this.navCtrl.navigateForward('/'); // Substitua pelo caminho correto
    } else {
      console.log('Formulário inválido');
    }
  }
}