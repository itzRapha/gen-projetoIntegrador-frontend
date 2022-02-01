import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  senhaEntry: string
  tipoEntry: string

  constructor(
    private authService: AuthService, // injeção de dependência
    private router: Router
  ) { }

  ngOnInit() { // método chamado quando a página iniciar
    window.scroll(0, 0) // vai pro topo da tela, eixo X e Y em 0
  }

  confirmarSenha(event: any) {
    this.senhaEntry = event.target.value
  }

  tipoUsuario(event: any) {
    this.tipoEntry = event.target.value
  }

  cadastrar() {

    this.usuario.tipo = this.tipoEntry

    if (this.usuario.senha != this.senhaEntry) {
      alert('A senha digitada não confere!')

    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {this.usuario = resp})

      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    }
  }
}
