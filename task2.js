const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

const output2 = document.getElementById("output2");
output2.textContent = Math.max(...uniqueValuesArray);

function uniqueValues(ar1, ar2) {
  const uniqueArray = [];
  for (const el of ar1) {
    uniqueArray.push(el);
  }
  for (const el of ar2) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  }
  return uniqueArray;
}
