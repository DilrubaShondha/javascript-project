function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 10;
    const perTableWood = 30;
    const perBedWood = 40;

    const totalChairWood = perChairWood * chairQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalBedWood = perBedWood * bedQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
  
}
const wood = woodQuantity(10, 10, 10);
console.log(wood);
