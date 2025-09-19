import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  this.userService.addUser(this.user).subscribe((novo) => {
    window.location.href = `/sucesso?id=${novo.id}`;
  });
}
}
