const heights = [65,33,66,43,87];
function getMax(numbers){
    let max = heights[0];
    for(const height of heights){
        if (max < height){
            max = height;
        }
    }
return max;
}
const max = getMax(heights);
console.log("max is:" + max);