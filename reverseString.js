// reversing a string

function reverse(str){

  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Please enter the correct value'
    
  }

  const totalItems = str.length - 1;
  const backwordStr = []

  for (let i = totalItems; i >= 0; i--){
    backwordStr.push(str[i])
  }

  return backwordStr.join('')

}

// calling function
const reverseStr = reverse('Raiyan')
console.log(reverseStr)



