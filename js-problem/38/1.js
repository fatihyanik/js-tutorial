const num = [3,6,9]; 

// let sum =0;
// for(let i=0; i<num.length; i++){
//     sum+= num[i]
// }
// console.log(sum);


function sum1(){
    let toplam=0;
    num.forEach((el)=>{
toplam+=el
    })
    return toplam
}

console.log(sum1());


let sum =0;
num.forEach(number=> sum +=number)
console.log(sum);

let sum2 = num.reduce((acc,curr)=>acc+curr)
console.log(sum2);

let sum4 =0;
num.map(number=> sum4 +=number)
console.log(sum4);

let numbers=[1,2,3];

let squareSum = ()=>numbers.reduce((toplam, item)=>toplam+item*item)
console.log(squareSum())


function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace("t","u")
  }

  const str5="AAAA"

console.log(str5.replace("A", "B"));