import { Component, OnInit } from '@angular/core';
import { Categoria } from '../compartilhado/categoria-model';
import { CategoriaService } from '../compartilhado/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

    //Variáveis Globais necessárias
    currentAction: string;                  // Novo / Alterar
    //categoryForm: FormGroup;                // definição de Formulario
    pageTitle: string;                      // titulo da página, Editando ou Inserindo
    serverErrorMessages: string[] = null;   // array de erros, mensagems retornadas do Servidor
    submittingForm: boolean = false;        // Controlar botão de submeter, desabilitar até que o server retorne uma resposta
    category: Categoria = new Categoria();  // proprio objeto de Category


    constructor(
      // Injeção de Dependencias
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
    //private formBuilder: FormBuilder
    ) { }
  ngOnInit(): void {
  }

}
