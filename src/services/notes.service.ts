import {Injectable} from '@angular/core';

@Injectable()
export class NotesService{
  notes = [
    {id:1,title:'nota 1', description:'descripcion nota 1'},
    {id:2,title:'nota 2', description:'descripcion nota 2'},
    {id:3,title:'nota 3', description:'descripcion nota 3'}
  ];
  public getNotes(){
    return this.notes;
  }
}
