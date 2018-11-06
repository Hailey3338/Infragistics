class ProductGrid{
   private Product: string;
   private Product: Jquery;
}

public Init(){
   this.ProductGrid = $("#product");
   this.pSourceUrl = this.product.attr("data-product");
   this.InitProduct();
}

InitProduct(){
   ProductGrid.igGrid({
      width = "100%",
      columns: [
       {
          headerText: "Product ID",
          key: "ProductID",
          dataType: "number",
          width: "15%"
        }
        { 
           headerText: "Product Name",
           key: "ProductName",
           dataType: "string",
           width: "40%"
        }
        {
           headerText: "Product Number",
           key: "ProductNumber",
           dataType: "string",
           width: "30%"
        }
        {
           headerText: "Make Flag",
           key: "MakeFlag",
           dataType: "bool",
           width: "15%"
        }
        ],
        dataSource: pSourceUrl,
        features: [
        {
           name: "Paging"
        },
        {
           name: "Sorting"
        },
        {
           name: "Filtering"
        },
        ],
       
});
});
$(()=>{
   var Ubersicht = productGrid.
