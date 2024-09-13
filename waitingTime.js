function  waitingTime(waitingTimes,serialNumber) {
      if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){ 
        return 'Invalid Input';
     }
      let sum = 0;
      let avg = 0;
      serial = serialNumber - 1;
      n = waitingTimes.length;
      if(n + 1 === serialNumber){
         return 0; 
        }
      for(value of waitingTimes){
          sum = sum + value;
      }
      avg = Math.round(sum / n) ;
      serial = serial  - n;
      return serial * avg; 
}
