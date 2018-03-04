import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-detalhes',
  templateUrl: './funcionario-detalhes.component.html',
  styleUrls: ['./funcionario-detalhes.component.css']
})
export class FuncionarioDetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  _funcionario = {}

  ngOnInit() {
    this.getFuncionarioDetalhe(this.route.snapshot.params['id']);
  }

  getFuncionarioDetalhe(id) {
    this.http.get('http://localhost:8080/api/funcionarios/'+id).subscribe(
      data => {
      this._funcionario = data;
      },erro => {
        console.log('Ocorreu algum problema -> '+erro);
      }
    );
  }

}
