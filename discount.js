function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    if(quantity >= 200){
        const total = quantity * 70;
        return total;
    }
}
const price = discountPrice(201);
console.log(price)

