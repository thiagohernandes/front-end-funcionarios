import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario-edicao',
  templateUrl: './funcionario-edicao.component.html',
  styleUrls: ['./funcionario-edicao.component.css']
})
export class FuncionarioEdicaoComponent implements OnInit {

  _funcionario = {};
  
    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getFuncionario(this.route.snapshot.params['id']);
    }
  
    getFuncionario(id) {
      this.http.get('http://localhost:8080/api/funcionarios/'+id).subscribe(data => {
        this._funcionario = data;
      });
    }
  
    alterarFuncionario(id) {
      this.http.put('http://localhost:8080/api/funcionarios/alterar/'+id,this._funcionario)
        .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/funcionario']);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
