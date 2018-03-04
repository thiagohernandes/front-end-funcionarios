import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario-novo',
  templateUrl: './funcionario-novo.component.html',
  styleUrls: ['./funcionario-novo.component.css']
})
export class FuncionarioNovoComponent implements OnInit {

  _funcionario = {};
  
    constructor(private http: HttpClient, private router: Router) { }
  
    ngOnInit() {
    }
  
    salvarFuncionario() {
      this.http.post('http://localhost:8080/api/funcionarios/novo', this._funcionario)
        .subscribe(res => {
            this.router.navigate(['/funcionario']);
          }, (err) => {
            console.log(err);
          }
        );
    }

}
