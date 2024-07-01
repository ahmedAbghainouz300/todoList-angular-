import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface tasks {
    content: string;
    accomplished: boolean;
    taskId: number ; 
    editing: boolean; 
    newContent?: string; 
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'todoList';
  input = '' ;
  
  id = 1 ; 
  
  tasks : tasks[] = [] ; 
  done = false ; 
  addTask(text:string){ 
    if(text != '' && text != undefined) { 
      const newTask = {
            content : text , 
            accomplished : this.done ,
            taskId : this.tasks.length + 1,
            editing : false 
          }
          this.tasks.push(newTask) ; 
          this.input = '' ;
          this.done = false ; 
    }
  }
  deleteTask (value:number) { 
      const index = this.tasks.findIndex(task => task.taskId === value);
      if (index !== -1) {
        this.tasks.splice(index, 1); // Remove one element at the specified index
      }
  }
  editTask(value:number , update:any){ 
    const index = this.tasks.findIndex( task => task.taskId === value) ; 
    if (index !== -1 ) { 
      this.tasks[index].content = update ; 
      this.tasks[index].editing = false ; 
    }
  }
}
