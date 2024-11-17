import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My to do list';
  filter: "all" | "active" | "done" = "all"
  allItems =
    [
      { description: "eat", done: true },
      { description: "sleep", done: false },
      { description: "play", done: false },
      { description: "laugh", done: false },
    ];
  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  addItem(description: string) {
    if (!description) return;
    for( let i = 0, j = this.allItems.length-1; i <= j; i++){
      if( this.allItems[i].description === description || 
        this.allItems[j].description === description){
        return;
      }
      j--;
    }

    this.allItems.unshift({
      description,
      done: false
    });
  }
}
