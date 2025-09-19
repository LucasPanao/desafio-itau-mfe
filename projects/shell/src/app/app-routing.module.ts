import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfeCadastro',
        exposedModule: './CadastroModule'
      })
      .then(m => m.CadastroModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfeCadastro',
        exposedModule: './CadastroModule'
      })
      .then(m => m.CadastroModule)
  },
  {
    path: 'sucesso',
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfeSucesso',
        exposedModule: './SucessoModule'
      })
      .then(m => m.SucessoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
