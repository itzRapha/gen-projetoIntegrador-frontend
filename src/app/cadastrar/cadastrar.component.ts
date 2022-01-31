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

  confirmarSenha(event: any) { // pega o valor da senha
    this.senhaEntry = event.target.value
  }

  tipoUsuario(event: any) { // pega o valor do tipo de usuário
    this.tipoEntry = event.target.value
  }

  cadastrar() { // não pega nada, por isso não tem parâmetro

    // pega o tipo escolhido e atribui ao tipo do usuario
    this.usuario.tipo = this.tipoEntry

    // confirma se a senha digitada bate com a senha confirmada
    if (this.usuario.senha != this.senhaEntry) {
      alert('A senha digitada não confere!')

    } else {// envia o usuario como objeto para o servidor, mas o SUBSCRIBE transforma em JSON
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {this.usuario = resp})
      // cadastrar() envia para o servidor
      // subscribe() transforma o objeto em JSON
      // arrow function pega a resposta e atribui ao usuario

      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    }
  }
}
