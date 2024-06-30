import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private localStoragekey = 'listaTareas';

  getTareas():string[]{
    return JSON.parse(localStorage.getItem(this.localStoragekey) as string) || [];
  }

  agregarTarea(tarea: string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem( this.localStoragekey, JSON.stringify(tareas) );
  }

  eliminarTarea(index: number){
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem( this.localStoragekey, JSON.stringify(tareas) );
  }

}
