import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tarefa: String | any;
  public listaAtividade = ['']

  constructor() { }

  ngOnInit(): void {
    this.tarefa = '';
    this.remover(0);
  }
  
  adicionar(){
    if(this.tarefa != ''){
      this.listaAtividade.push(this.tarefa);
      this.tarefa = '';
    }
  }
  remover(posic: any){
    this.listaAtividade.splice(posic, 1)
  }
  
}
