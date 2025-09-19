import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../services/service';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.scss']
})
export class SucessoComponent implements OnInit {
  user?: User;
  users: User[] = [];
  mostrandoLista = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

    ngOnInit() {
    this.userService.getUsers().subscribe(lista => {
      if (lista.length > 0) {
        this.user = lista[lista.length - 1];
      }
    });
  }

  listUsers() {
    this.userService.getUsers().subscribe(lista => {
      this.users = lista;
      this.mostrandoLista = true;
    });
  }

  back() {
    this.mostrandoLista = false;
  }
}
