import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {

  }
  _funcionarios : any;
  _currentFuncionario = {};

  ngOnInit() {
    this.http.get('http://localhost:8080/api/funcionarios/todos').subscribe(data => {
      this._funcionarios = data;
    },
    erro => {
      console.log('Ocorreu algum problema -> '+erro);
    }
  )
  }

  setCurrentFuncionario(funcionario){
    this._currentFuncionario =funcionario;
  }

  apagarFuncionario(id) {
    this.http.delete('http://localhost:8080/api/funcionarios/apagar/'+id)
      .subscribe(res => {
        this.ngOnInit();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
