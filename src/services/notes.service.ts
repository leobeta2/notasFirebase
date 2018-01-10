import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database"

@Injectable()
export class NotesService{
  constructor(public afDB: AngularFireDatabase){};
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
    this.afDB.database.ref('notas/'+note.id).set(note);
    //this.notes.push(note);
  }

  public editNote(note){
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == note.id){
          this.notes[i] = note;
        }
      }
    }

    public deleteNote(note){
      for(let i = 0; i < this.notes.length; i++){
        if(this.notes[i].id == note.id){
            this.notes.splice(i, 1);
          }
        }
      }
}
