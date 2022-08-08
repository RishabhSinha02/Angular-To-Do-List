import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemsComponent } from './MyComponents/todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
