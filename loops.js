function forLoop(array){
  for(i = 0; i < 25; i++)
  {
    if( i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    } 
    
  } 
  return array;
}

function whileLoop(countdown) {
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

var i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(array){
do {
   array.pop();
  } while (incrementVariable() < array.length); 
}
