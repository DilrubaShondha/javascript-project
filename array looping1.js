function inchToFeet(inch){
   let feet = inch / 12;
   return feet; 
}
const height = inchToFeet(75)
console.log(height)

function inchToFeet2(inch){
    let fractionFeet = inch / 12;
    let feet = parseInt(fractionFeet)
    let remainingInch = inch /12;
console.log(feet + "hi" +remainingInch) }
 const height = inchToFeet(75)
 console.log(height)