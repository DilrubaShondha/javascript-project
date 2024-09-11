      function inchToFeet(inch) {
        let feet = inch / 12;
        return feet; 
      }
      
      const height1 = inchToFeet(75);
      console.log(height1);
      
      function inchToFeet2(inch) {
        let fractionFeet = inch / 12;
        let feet = parseInt(fractionFeet);
        let remainingInch = inch % 12; // Correct calculation for remaining inches
        console.log(feet + " feet " + remainingInch + " inches");
      }
      
      inchToFeet2(75); // Properly calling inchToFeet2
      
      


