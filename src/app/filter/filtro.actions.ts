import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completado' | 'pendientes';

export const setFiltro = createAction(
    '[Filter] Set Filtro',
    props<{filtro: filtrosValidos}>()
    );