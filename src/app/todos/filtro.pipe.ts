import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filter/filtro.actions';
import { Todo } from './models/todo.model';
import { todoReducer } from './todo.reducer';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completado':
        return todos.filter((todo) => todo.completado);
      case 'pendientes':
        return todos.filter((todo) => !todo.completado);
      default:
        return todos;
    }
    console.log(todos);
    return todos;
  }
}
