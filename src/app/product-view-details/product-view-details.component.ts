import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {

 product: Product; 
 selectedProductIndex = 0;

constructor(private activatedRoute: ActivatedRoute, 
  private router: Router, private productService: ProductService
){}

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product);

  }

  addToCart(productId){
    this.productService.addToCart(productId).subscribe(
     (response) =>{
      console.log(response);
     }, (error) =>{
      console.log(error);
       }

    );
      
  }



  changeIndex(index){
    this.selectedProductIndex = index;

  }
  
  buyProduct(productId){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: true, id: productId
    }]);

  }




}
