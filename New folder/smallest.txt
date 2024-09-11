const heights = [65,33,66,43,87];
function getMin(numbers){
    let min = heights[0];
    for(const height of heights){
        if (min > height){
            min = height;
        }
    }
return min;
}
const min = getMin(heights);
console.log("min is:" + min);