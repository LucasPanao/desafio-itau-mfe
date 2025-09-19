import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '../services/service';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.scss']
})
export class SucessoComponent implements OnInit {
  usuario?: User;
  usuarios: User[] = [];
  mostrandoLista = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

    ngOnInit() {
    this.userService.getUsers().subscribe(lista => {
      if (lista.length > 0) {
        this.usuario = lista[lista.length - 1];
      }
    });
  }

  listarUsuarios() {
    this.userService.getUsers().subscribe(lista => {
      this.usuarios = lista;
      this.mostrandoLista = true;
    });
  }

  voltarDetalhe() {
    this.mostrandoLista = false;
  }
}
