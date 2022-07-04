module.exports = function toReadable (number) {
    
    if(number===0){
        return "zero";
    } 
    const ones={
        0:" ",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:'five',
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
      };
      if(ones[number]) 
      {
          return ones[number];
      }
      
      const teens={
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
      };
      if(teens[number])
      {  
          return teens[number];
      }
      
      const tens={
        10:"ten",
        20:"twenty",
        30:"thirty",
        40:"forty",
        50:"fifty",
        60:"sixty",
        70:"seventy",
        80:"eighty",
        90:"ninety"
      }
      
      if(tens[number])
    { 
        return tens[number];
    }
      function toNumber(number){
        let digit="";
        let decimal="";
        digit=ones[number%10];
        decimal=tens[Math.floor(number/10)*10];
        let result=`${decimal} ${digit}`;
        return result;
      }
      if (number>20 && number<100){
          return toNumber(number);
      }
      function hundredstoNumber(number){
          let firstNum = Math.floor(number / 100);
          let onlyHundred = `${ones[firstNum]} hundred`;
          if (number % 100 === 0) return onlyHundred;
          let othersNum = number % 100;
          let othersText = toReadable(othersNum);
  
          return `${onlyHundred} ${othersText}`;
      }
     
      if(number>99 && number<1000){
          return hundredstoNumber(number);
      }
  
}
