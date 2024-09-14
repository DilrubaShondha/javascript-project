const products = [
    {id: 1, name:'walton', price:15000},
    {id: 2, name:'xiomi', price:18000},
    {id: 3, name:'hp', price:25000},
    {id: 4, name:'realme', price:15800},
    {id: 5, name:'vivo', price:10000},

];
// for(const product of products){
//     console.log(product);
// }
function matchedProducts(products, search){
    const matched =[];
    for(const product of products){
     console.log(product.name.includes(search));
    }
}
const result = matchedProducts(products, 'vivo');
console.log(result);