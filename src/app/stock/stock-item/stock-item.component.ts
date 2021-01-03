import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  // public name: string;
  // public code: string;
  // public price: number;
  // public previousPrice: number;
  // public positiveChange: boolean;
  // public favorite: boolean;

  //public stock: Stock;
  public stocks: Array<Stock>;//陣列的宣告方式 直得注意抓出所有的型別
  public stockClasses;
  public ngStyleTest;

  constructor() { }

  ngOnInit(): void {
    // this.name = 'Test Stock Company';
    // this.code = 'TSC';
    // this.price = 85;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favorite = false;
    //this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Test1', 'SSC', 80, 80),
      new Stock('Test2 Company', 'TSC', 10, 20),
      new Stock('Test3 Company', 'LSC', 876, 765),
    ]

    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01;
    // this.stockClasses = {
    //   "positive": this.stock.isPositiveChange(),
    //   "negative": !this.stock.isPositiveChange(),
    //   "large-change": largeChange,
    //   "small-change": !largeChange,
    // }
    // this.ngStyleTest = {
    //   "color": this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size": largeChange ? "1.2em" : "0.8em"
    // }
  }

  toggleFavorite(event, i) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stocks[i].favorite = !this.stocks[i].favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code
  }

}
