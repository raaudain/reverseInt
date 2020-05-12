function reverseInt(num){
  // parseInt() turns a string into a number

  // // Solution #1
  // const reversed = num.toString().split("").reverse().join("")

  // return parseInt(reversed) * Math.sign(num);


  // Solution # 1.5
  return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
  
}


// reverseInt(15);
// reverseInt(189);
// reverseInt(500);
reverseInt(-51);
// reverseInt(-90);