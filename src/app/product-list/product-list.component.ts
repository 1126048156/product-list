import {Component} from '@angular/core';
import {products} from '../products';
@Component({
    selector:'app-product-list',
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent{
    products = products;
    share(good){
        window.alert(`${good} has been shared!`);
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale');
      }
}