function find_ans(index){
  let first = 1;
  let second = 1;

  for(let i=2; i<=index; i++){
    let sum = first+second;
    first = second;
    second = sum;
  }
  if(index<=1){
    return 1
  }else{
    return second;
  }
}
console.log(find_ans(4));