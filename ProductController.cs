private ProductEntity _context;
public ProductController(ProductEntity context){
   this.context = _context;
}
[HttpGet]
public JsonResult GetProduct(){
   return Json(_context.Product.ToList());
}
