import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { map, flatMap, catchError  } from 'rxjs/operators';
import { Categoria } from './categoria-model';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiPath: string = 'api/categorias';

  constructor(private http: HttpClient) { }

  obterTodos() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDadosParaCategoria)
    );
  }

  obterPorId(id: number): Observable<Categoria> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDadosParaUmaCategoria)
    );
  }

  criar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiPath, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDadosParaUmaCategoria)
    );
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiPath}/${categoria.id}`;
    return this.http.put<Categoria>(this.apiPath, categoria).pipe(
      catchError(this.handleError),
      map(() => categoria)
    );
  }

  remover(id: number) {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDadosParaCategoria(jsonData: any[]): Categoria[] {
    const categorias: Categoria[] = [];
    jsonData.forEach(elemento => categorias.push(elemento as Categoria));
    return categorias;
  }

  private jsonDadosParaUmaCategoria(jsonData: any): Categoria {
    return jsonData as Categoria;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO ', error);
    return throwError(error);
  }
}
