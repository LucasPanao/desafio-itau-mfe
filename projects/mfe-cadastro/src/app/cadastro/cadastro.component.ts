import { Component } from '@angular/core';
import { User, UserService } from '../services/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  user: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  onSubmit() {
  this.userService.addUser(this.user).subscribe(() => {
    window.location.href = '/sucesso';
  });
}
}
