function reverseInt(num){
  // parseInt() turns a string into a number

  // // Solution #1
  // const reversed = num.toString().split("").reverse().join("")

  // return parseInt(reversed) * Math.sign(num);


  // // Solution #1.5
  // return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);


  // // Solution #2
  // let reversed = "";
  // const numbers = num.toString().split("");

  // for (number of numbers){
  //   reversed = number + reversed;
  // }

  // return num < 0 ? parseInt(reversed) * -1 : parseInt(reversed); 


  // Solution #3
  const reverse = num.toString().split("").reduce((reversed, number) => number + reversed, "");

  return parseInt(reverse) * Math.sign(num);
}


// reverseInt(15);
// reverseInt(189);
// reverseInt(500);
reverseInt(-51);
// reverseInt(-90);