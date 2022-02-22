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
  del(i:any){
    console.log("DEL --> " + i);
    const tash = document.createElement("del");
    const node = document.createTextNode("This is new.");
    const docdoc = document.getElementById(i)
    var texto = docdoc?.innerHTML;
    console.log(texto)
    document.getElementById(i)?.appendChild(tash)
    console.log(docdoc);
    // tash.appendChild(docdoc);
    const element = document.getElementById('item-'+i);
    console.log(element);
    // element.appendChild(tash);

  }
}
