import { Component } from '@angular/core';
import { IEstudante } from './estudantes';
import { EstudanteService } from 'src/app/estudantes/estudantes.service';

@Component({
    selector: 'jedi-estudantes',
    templateUrl: './lista-estudantes.component.html'
})

export class ListaEstudantesComponent {
    tituloPagina: string = 'Lista de Estudantes';
    larguraImagem: number = 50;
    margemImagem: number = 2;
    exibirImagem: boolean = false;
    _filtroLista: string;
    get filtroLista() : string {
        return this._filtroLista;
    }
    set filtroLista(valor: string) {
        this._filtroLista = valor;
        this.estudantesFiltrados = this.filtroLista ? this.executarFiltro(this.filtroLista) : this.estudantes;
    }

    estudantesFiltrados: IEstudante[];
    estudantes: IEstudante[] = []
    
    constructor(private estudanteServico: EstudanteService) {}
        
    ngOnInit() {
        this.estudantes = this.estudanteServico.getEstudantes();
        this.estudantesFiltrados = this.estudantes;
    }

    alternarImagem() : void {
        this.exibirImagem = !this.exibirImagem;
        console.log(this.exibirImagem);
        
    }

    executarFiltro(filtrarPor: string): IEstudante[] {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.estudantes.filter((estudante: IEstudante) => 
        estudante.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1);
    }
}