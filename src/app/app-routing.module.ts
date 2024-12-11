import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'desenvolvedor',
    loadChildren: () =>
      import('./desenvolvedor/desenvolvedor.module').then(
        (m) => m.DesenvolvedorPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./cadastro/cadastro.module').then((m) => m.CadastroPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'notifica',
    loadChildren: () =>
      import('./notifica/notifica.module').then((m) => m.NotificaPageModule),
  },
  {
    path: 'publica',
    loadChildren: () =>
      import('./publica/publica.module').then((m) => m.PublicaPageModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((m) => m.TestPageModule),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
