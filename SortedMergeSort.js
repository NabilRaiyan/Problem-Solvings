
// sort a merged sort array
function mergeSortedArrays(array1, array2) {

    const mergedSort = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1
    
  
  
    if (array1.length === 0){
      console.log(array2)
    }
  
    else if (array2.length === 0){
      console.log(array1) 
    }
    while (array1Item || array2Item){
    if (!array2Item ||  array1Item < array2Item){
        mergedSort.push(array1Item)
        array1Item = array1[i]
        i++;
    }
    else{
        mergedSort.push(array2Item)
        array2Item = array2[j]
        j++;
    }
      
    }
    console.log(mergedSort)
  }
  
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);