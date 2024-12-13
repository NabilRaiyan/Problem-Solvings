
// sort an array
function sortArray(array){

    let sortedArray = []
    const arrayItem = array[0]

    if (array.length === 0){
        console.log("Array is empty")
    }
    else{
       for(let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if (array[j] < array[i]){
                sortedArray.push(array[j])
            }
            else{
                sortedArray.push(array[i])
            }
        }
       }
    }

    console.log(sortedArray)

    
}

// calling the function
sortArray([4, 2, 5, 1, 8, 4])