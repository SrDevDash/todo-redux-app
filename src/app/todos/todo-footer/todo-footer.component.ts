import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filtro.actions';
import * as actions from '../../filter/filtro.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['completado','pendientes','todos'];
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro =>
      {
        console.log(filtro);
        this.filtroActual = filtro;
      });
      this.store.select('todos').subscribe(todos =>
        {
          this.pendientes = todos.filter(todo => !todo.completado).length;
        });
  }

  cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  borrarCompletados(){
    this.store.dispatch(actionsTodo.borrarCompletado());
  }
}
