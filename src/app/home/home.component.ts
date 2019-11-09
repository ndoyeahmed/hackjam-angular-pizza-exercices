import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {PIZZAS} from '../pizzasList';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BasketService} from '../basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 0;
  @ViewChild('testModal') templateRef: TemplateRef<any>;

  constructor(
    private modalService: NgbModal,
    private basketService: BasketService) {
  }

  pizzas = PIZZAS;
  totalPrice: any;

  ngOnInit() { }

  updateList(isIncrementing: boolean) {
    /* You should check if the value is incrementing or not and
    change the value of the counter depending of the value of the boolean
    */
    isIncrementing ? this.counter++ : this.counter--;
  }

  resetAll() {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    // Then, don't forget to also reset the counter
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    this.pizzas.map(x => {
      x.numberOrdered = 0;
      x.totalAmountProduct = 0;
    });
    this.counter = 0;
    this.basketService.resetBasket();
  }

  buyNow() {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */
    if (this.pizzas) {
      this.totalPrice = 0;
      this.pizzas.forEach(x => {
        this.totalPrice = this.totalPrice + (x.price * x.numberOrdered);
      });

      if (this.totalPrice && this.totalPrice > 0 && this.totalPrice <= 200) {
        this.modalService.open(this.templateRef);
      }
    }
  }
}
