// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };


// function mergeSortedArrays(array1, array2){
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;
  
//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if(array1.length === 0) {
//     return array2;
//   }
//   if(array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item){
//    if(array2Item === undefined || array1Item < array2Item){
//      mergedArray.push(array1Item);
//      array1Item = array1[i];
//      i++;
//    }   
//    else {
//      mergedArray.push(array2Item);
//      array2Item = array2[j];
//      j++;
//    }
//   }
//   return mergedArray;
// }

// mergeSortedArrays([0,3,4,31], [3,4,6,30]);