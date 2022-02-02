import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient /* acessa os métodos HTTP */) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://gen-ti.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://gen-ti.herokuapp.com/postagem/${id}`,this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://gen-ti.herokuapp.com/postagem/save', postagem, this.token)
  }

  putPostagem(postagem: Postagem):Observable<Postagem>{
    return this.http.put<Postagem>('https://gen-ti.herokuapp.com/postagem/update',postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete<Postagem>(`https://gen-ti.herokuapp.com/postagem/remove/${id}`,this.token)

  }
}
