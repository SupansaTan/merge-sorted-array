function getValueFromIndex(collection: number[], index: number) {
  if (index < 0 || index > collection.length - 1) {
    return Number.MAX_VALUE;
  } else {
    return collection[index];
  }
}

function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  let result: number[] = [];
  let MaxIterator: number = collection_1.length + collection_2.length + collection_3.length;

  let pivotA = 0;
  let pivotB = collection_2.length - 1;
  let pivotC = 0;

  for (let i = 0; i < MaxIterator; i++) {
    const numA = getValueFromIndex(collection_1, pivotA);
    const numB = getValueFromIndex(collection_2, pivotB);
    const numC = getValueFromIndex(collection_3, pivotC);

    const lowest = Math.min(numA, numB, numC);
    result.push(lowest);

    if (lowest == numA) pivotA++
    else if (lowest == numB) pivotB--
    else if (lowest == numC) pivotC++
  }

  return result;
}

// call method
let collection_1 = [1, 2, 5, 9, 10, 15, 20, Number.MAX_VALUE];
let collection_2 = [Number.MAX_VALUE, 16, 8 ,2, 1, 0];
let collection_3 = [2, 3, 8, 13];
console.log(merge(collection_1, collection_2, collection_3));