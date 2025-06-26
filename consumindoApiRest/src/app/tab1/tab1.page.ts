import { Component } from '@angular/core';
import { ConsumindoApiService } from '../services/consumindo-api.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
   public produtos: any[] = [];

  constructor(private consumindoApi: ConsumindoApiService) {}
  ngOnInit() {
    this.getProducts();
  }
  public getProducts() {
    this.consumindoApi.getProducts().subscribe((data: any) => {
      this.produtos = data;
      console.log('Produtos carregados:', this.produtos);
      // this.produtos.push({
      //   // id: JSON.parse(JSON.stringify(data))['id'],
      //   // title: JSON.parse(JSON.stringify(data))['title'],
      //   // price: JSON.parse(JSON.stringify(data))['price'],
      //   // description: JSON.parse(JSON.stringify(data))['description'],
      //   // category: JSON.parse(JSON.stringify(data))['category'],
      //   // image: JSON.parse(JSON.stringify(data))['image'],
      //   // rating: JSON.parse(JSON.stringify(data))['rating']
      // });
    }, error => {
      console.error('Erro ao carregar os produtos', error);
    });
  }
}
