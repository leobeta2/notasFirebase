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
  //funcion que filtra por id
  public getNote(id){
    return this.notes.filter(function (e, i){return e.id == id }) [0] || {id:null, title:null, description:null};
  }

  /**
   * createNote
note   
*/
  public createNote(note) {
    this.notes.push(note);
  }
}
