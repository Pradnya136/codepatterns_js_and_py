// printing patterns using javascript
// square star pattern

// *****
// *****
// *****
// *****

// let n = 5;
// for(let i = 1; i <= n; i ++){
//   let x = ""
//   for(let j = 1; j <= n; j++){
//     x +="*"
//   }
//  console.log(x)
// }

// console.log("-------------------------------------------")
// 2)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// let row = 5;
// let variable = 1;
// let space = "";
 
// for(let i = 1; i <= 5; i++){

//   for(let j = 1; j <= 5 - i ; j ++){
//     space += "=";
//   }
//   for(let k=1; k <=2* i-1; k++){
//     space += k +"";
//   }
//   for(let m = 1; m <= 5 - i;m++ ){
//     space +="="
//   }
//   space += "\n"
// }

// console.log(space)
// let space = "";

// for (let i = 1; i<= 5; i ++){
 
//   for (let j = 1; j <= 5; j ++){
//     if(i == 1 || i == 5){
//       space += "*";
//     }else{
//       if( j == 1 || j == 5){
//         space +="*"
//       }else{
//         space +=" "
//       }
//     }
//   }
//   space +="\n"
// }
// console.log(space)
// let space = "";
// for(let i = 1; i <= 5; i ++){
//   for(let j = 5; j >= i; j--){
//     space +=j;
//   }

//   space +="\n"
// }
// console.log(space)

// let space ="";

// for(let i =1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//    if(j ===  1 || j === i || i === 5){
//      space += "*"
//    }else{
//     space +=" "
//    }
//   }
//   space +="\n"
// }
// console.log(space)

let space = "";

for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= 5 - i; j++){
    space +="*"
  }
  space +="\n"
}
console.log(space)

// let space = "";
//  for(let i = 0; i < 6; i++){
//     for(let j = 0; j < i ; j++){
//       space+=i*2-1+" "
//     }
//     space +="\n"
//  }
//  console.log(space)


// let row = 5
// let space = ""
// for(let i = 5; i >= 1; i--){
//   console.log(i)
// }


// for( let i = 1; i <= 5; i ++){
//     console.log(i)
// }

// for( let i = 5; i >= 1 ; i --){
//     console.log(i)
// }

// for( let i = 1; i <= 5; i ++){
//     let empty_space = ""
//     for(let j = 1; j <= i; j ++){
//         empty_space += i + " " 
//     }

//     console.log(empty_space)
// }


// for( let i = 1; i <= 5; i ++){
//     emptyString ="";
//     for( let j = 1; j <= i; j ++){
//         emptyString += j + " "
//     }
//     console.log(emptyString)
// }
// n = 6
// for( let i = 1; i <= n; i ++){
//     emptyStr = "";
//     for( let j = 1; j <= n - i; j ++){
//         emptyStr += i + " "
//     }
//     console.log(emptyStr)
// }
// let n = 6;
// for( let i = 1; i <= n; i ++){
//     let emptyStr = "";
//     for( let j = 1; j <= n - i; j ++){
//         emptyStr += 5 + " "
//     }
//     console.log(emptyStr)
// }

// n = 5;
// for( i = 0; i <= n - 1; i ++){
//     let emstr ="";
//     for(let j = 0; j <= n-i; j ++){
//         emstr += j +" "
//     }
//     console.log(emstr)
// }

//  for( let i = 1; i <= 5; i ++){
//    let empstr = "";
//     for( let j = 1; j <= i ;j ++){
//         empstr += i +" "
//     }
//     console.log(empstr)
//  }

// for(let i = 1; i <= 5; i ++){
//     let empstr = "";
//     for(let j= 1; j <= i; j ++){
//         empstr += i +" "
//     }
//     console.log(empstr)
// }

// for( let i = 1; i <= 5; i ++){
//     let empstr = "";
//     for( let j = 1; j <= i; j ++){
//         empstr += j + " "
//     }
//     console.log(empstr)
// }
// let n = 6
// for( let i = 1; i <= n; i ++){
//     let estr = "";
//     for(let j = 1; j <= n - i; j ++){
//         estr += i + " "
//     }
//     console.log(estr)
// }
// let n = 6;
// for( let i = 1; i <= 5; i ++){
//     let emptystr = "";
//     for(let j = 1; j <= n - i; j++){
//         emptystr += 5 + " "
//     }
//     console.log(emptystr)
// }

// let n = 5;
// for ( let i = 0; i <= n - 1; i ++){
//     let mt = "";
//     for ( let j = 0; j <= n - i; j ++){
//         mt += j + " "
//     }
//     console.log(mt)
// }

// for(let i = 1; i <= 5; i ++){
//     let emptystr = "";
//     for( let j = 1; j <=i ; j ++){
//         emptystr += 2* i -1 + " "
//     }console.log(emptystr)
    
// }
// let n = 6;
// for(let i = 1; i <= n; i ++){
//     let emptystr = "";
//     for(let j = 1; j <= n - i; j ++){
//         emptystr += n - i + " "
//     }
//     console.log(emptystr)
// }

// for ( let i = 1; i <= 5; i ++){
//     let empstr = "";
//     for(let j = i; j >= 1; j --){
//         empstr += j +" "
//     }
//     console.log(empstr)
// }

// for(let i = 5; i >= 1 ; i --){
//     let a = "";
//     for(let j = i; j >= 1; j--){
//         a += j + " "
//     }
//     console.log(a)
// }
// let start = 1;
// let stop = 2;
// let currentnum = stop;
// for(let i = 2; i <= 5; i++ ){
//     let emptystr_rowoutput = "";
//     for(let j = start; j < stop; j ++){
//         currentnum --;
//         emptystr_rowoutput += currentnum + " ";
//     }
//     console.log(emptystr_rowoutput.trim());
//     start = stop;
//     stop += i;
//     currentnum = stop;
// }


// for(let i = 1; i <= 5; i++){
//     let empstr = "";
//     for( let j = 5; j > i; j --){
//         empstr += j + " "
//     }
//     for( let k = 1; k <= i; k++){
//         empstr += k + " "
//     }
//     console.log(empstr)
// }

// function pascaltrigen(r){
//     let tri = [];
    
//     for(let i = 0; i < r ; i ++){
//         tri[i] = [];
//         for(let j = 0;j <= i ; j ++){
//             if( j === 0 || j === i){
//                 tri[i][j] = 1;
//             }else{
//                 tri[i][j] = tri[i - 1][j - 1] + tri[i-1][j];
//             }
//         }

//     }
//     return tri
// }


// function printpascaltri(tri){

//     let numrows = tri.length;

//     for(let i = 0; i < numrows; i++){
//         let empstr = "";
//         for(let j = 0; j < numrows - i - 1 ; j ++){
//             empstr += "   ";
//         }

//         for(let k = 0; k <= i ; k++){
//             empstr += tri[i][k] + "   "
//         }
//         console.log(empstr.trim())
//     }

// }

// let numrows = 5;
// let pascaltriangle = pascaltrigen(numrows)
// printpascaltri(pascaltriangle)


// let numrows = 5;
// for( let i = 0; i < numrows; i ++){
//     let empstr = "";
//     for(let j = 0; j < numrows - i; j++){
//         empstr += " ";
//     }
//      let coeff = 1;
//      for(let k = 0; k <= i ; k++){
//         empstr += "  " + coeff
//         coeff = coeff *(i-k)/(k+1)
//      }
//      console.log(empstr.trim())
// }


// let numOfrows = 4;
// for(let i = 0; i <= numOfrows; i++){
//     let empstrfrans = "";
//     for(let j = 0; j < numOfrows - i; j++){
//         empstrfrans += "  ";
//     }
//     let coef = 1;
//     for(let k = 0; k <= i; k++){
//         empstrfrans += "   " + coef;
//         coef = coef * (i-k)/(k+1)
      
//     }
//     console.log(empstrfrans)
// }




// let numOfRows = 5;

// for(let i = 0;i <= numOfRows; i++){
//     let emptyStringForAns = "";
//     for( let j = 0; j < numOfRows - i; j++){
//         emptyStringForAns += "  ";
//     }

//     let coffe = 1;
//     for( let k = 0; k <= i ; k++){
//         emptyStringForAns += "   " + coffe;
//         coffe = coffe * ( i - k)/ (k+1)
//     }
//     console.log(emptyStringForAns)
// }