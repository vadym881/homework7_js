const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]

const output1 = document.getElementById("output1");
output1.textContent = reversedArray.join("*");

function reverseArray(array) {
  //return array.reverse();

  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
