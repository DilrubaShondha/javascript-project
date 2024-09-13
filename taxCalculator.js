function calculateTax(income, expenses) {
    if (typeof income === 'undefined' || typeof expenses === 'undefined') {
         return 'Invalid Input'; 
        }
    if(income<=0 || expenses<=0){
        return 'Invalid Input';
    }
    if(income<expenses){
        return 'Invalid Input';
    }
    let profit = income - expenses ;
    let tax = profit * .2 ;
    return tax;
}
