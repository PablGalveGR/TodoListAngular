import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
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
  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
