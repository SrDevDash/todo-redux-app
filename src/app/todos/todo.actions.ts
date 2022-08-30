import { createAction, props } from '@ngrx/store';


export const crear = createAction(
    '[TODO] Crear ToDo',
    props<{texto: string}>()
    );

export const toggleCompletado = createAction(
    '[TODO] Toggle Todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{text: string, id: number}>(),
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{id: number}>(),
)

export const toggleAll = createAction(
    '[TODO] Toggle all todo',
    props<{complete: boolean}>(),
)

export const borrarCompletado = createAction(
    '[TODO] Borrar Completados',
)