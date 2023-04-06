function sumDigits(number) {
    // const numberStr = (number < 0 ? -number : number).toString();
    // const numberStr = (number < 0 ? number * -1 : number ).toString();
    const numberStr = Math.abs(number).toString();
    
    const arr4 = Array.from(numberStr, Number)
    console.log(arr4)
    // let result = 0;
    // for(let i = 0; i < numberStr.length ; i++){
    //   result += parseInt(numberStr[i])
    // }
    // return result
    return arr4.reduce((acc, curr) => acc + curr, 0)
  }
  sumDigits(-323)
  console.log('**********')
  
  function sumDigits2(number) {
   return Array.from(Math.abs(number).toString(), Number).reduce((acc,curr) => acc + curr,0)
  }
  sumDigits2(-323)