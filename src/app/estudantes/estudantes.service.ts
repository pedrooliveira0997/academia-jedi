import { Injectable } from "@angular/core";
import { IEstudante } from 'src/app/estudantes/estudantes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
    export class EstudanteService{
        private estudanteUrl = 'api/estudantes/estudantes.json';
        constructor(private http: HttpClient) {}

        getEstudantes(): Observable<IEstudante[]> {
            return this.http.get<IEstudante[]>(this.estudanteUrl).pipe(
                tap(dados => console.log('Todos: ' + JSON.stringify(dados))),
                catchError(this.trataErro)
                );
        }

        getEstudante(id: number): Observable<IEstudante | undefined> {
            return this.getEstudantes().pipe(
            map((estudantes: IEstudante[]) => estudantes.find(p => p.id === id))
            );
        }

        private trataErro(erro: HttpErrorResponse) {
            
            let mensagemErro = '';
                if (erro.error instanceof ErrorEvent) {
            
                mensagemErro = `Um erro ocorreu: ${erro.error.message}`;
                } else {
           
                mensagemErro = `Servidor retornou o código: ${erro.status}, a mensagem de erro é ${erro.message}`;
                }
                console.error(mensagemErro);
                return throwError(mensagemErro);
        }
 
    }