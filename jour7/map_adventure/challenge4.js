var arr=[1,2,3,4];

var arr2= arr.map(function(nb){
    if (nb %2==0) {  
        return true;
      }
      else {
        return false;
      }
});

console.log(arr2)



var arr3= arr.map(function(nb){
    return nb %2===0
});

console.log(arr3)