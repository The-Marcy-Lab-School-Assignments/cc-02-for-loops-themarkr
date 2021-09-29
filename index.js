//1
function countToTen(){
  for (let i = 1; i<=10; i++){
      console.log(i);
  }
}

//2
function countFromOne(num){
  for (let i = 1; i <= num; i++){
      console.log(i);
  }
}

//3
function countEveryEven(num){
  for (let i = 1; i <= num; i++){
      if( i % 2 === 0 ){
          console.log(i);
      }
  }
}

//4
function countEveryOdd(num){
  for (let i = 1; i <= num; i++){
      if( i % 2 != 0 ){
          console.log(i);
      }
  }
}

//5 
function countEvens(array){
    let evens = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evens.push(array[i])
        }
    }
    return evens.length
}

//countToTen();
//countFromOne(5);
//countEveryEven(20);
//countEveryOdd(5);
console.log(countEvens([1,3,7,17,19]));