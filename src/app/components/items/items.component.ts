import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState = false;
  itemToEdit: Item;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    // console.log(this.itemService.getItems());
    this.itemService.getItems().subscribe(_items => {
      this.items = _items;
    });
  }

  deleteItem(item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
