alert("Hush kelibsiz")

// {
//     // masala-5
//     function son(a, b, c){
//         let musbat = 0
//         let manfiy = 0
//         if(a > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         if(b > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         if(c > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         return `musbat: ${musbat}, manfiy: ${manfiy}`
//     }
//     console.log(son(5, -4, 6));
// }

// {
//     // masala-6
//     function son(a, b){
//         if(a > b){
//             return `kattasi: ${a}`
//        }else{
//         return `${b}`
//            }
          
//     }
//     console.log( son(7, 4));
// }

// { 
//     // masala-7
//     function  son(a, b){
//         if(a < b){
//             return`bunda a son ${a} kichkina `
//         }else{
//             return `bunda b son ${b} kichkina`
//         }
//     }
//     console.log(son(4,5));
// }

// {
//     // masala-8
//     function son(a, b){
//         if(a > b){
//             return  `a soni kattasi: ${a} , b soni kichkina:${b}`
//         }else{
//             return  `bunda b soni kattasi: ${b} , a soni kichkina:${a}`
//         }
     
//     }
//     console.log(son(16, 28));
// }

// {
//     /// masala-9
//     function son(a, b){
//         let c = 0
//         if(a < b){
//             return  `a soni kchik: ${a}, b soni katta: ${b}`
//         }else{
//             c = a
//             a = b
//             b = c
//             return  `a soni kichik: ${a}, b soni katta: ${b}` 
//         }
//     }
//     console.log(son(21, 28));
// }

// {
//     // masala-10
//     function son(a, b){
//         if(a != b){
//             let sum = a + b
//             return `a soni: ${a}, va b soni ${b}, shular yigindisi: ${sum} ga teng`
//         }else{
//             return `javob ${0} ga teng`
//         }
//     }
//     console.log(son(13, 13));
// }

// {
//     // masala-11
//     function son(a, b){
//         let c = 0
//         if(a == b){
//             return `a soni: ${a}, b soni: ${b}, javob:${c}`
//         }else if(a > b){
//             return `a son ${a} katta `
//         }else{
//             return `b son  ${b} katta `
//         }
//     }
//     console.log(son(47, 8));
// }

// {
//     // masala-12
//   function son(a, b, c){
//     if(a < b ){
//     return `${a}`
//     }else if(a < c){
//     return `${a}`
//     }else if(b < a){
//         return `${b}`
//     }else if(b < c){
//         return `${b}`
//     }else if(c < a){
//         return `${c}`
//     }else if (c < b){
//         return `${c}`
//     }
// }
//   console.log(son(14, 24, 32));
// }

// {
//     // masala-13
//     function son(a, b, c){
//         if(b < a || b > c){
//             return  `ortasidagi: ${c}` 
//         }
//     }
//     console.log(son(8, 4, 1));
// }

// {
//     // masala-14
//     function son(a, b, c){
//         if(a > b && b < c || a > b && a > c){
//             return `kichik: ${b}`
//         }else{
//             return `katta: ${a}`
//         }
//     }
//     console.log(son(8, 1, 9));
// }

// {
//     // masala-15
//     function son(a, b, c, d) {
//                 if (a === b && b === c) return 4;
//                 if (a === b && b === d) return 3;
//                 if (a === c && c === d) return 2;
//                 if (b === c && c === d) return 1;
//                 return 0;
//             }
            
//             console.log(son(1, 3, 4, 8));
    
// }


// {
//     // masala-16
//     function son( a, b, c) {
//         if ( a < b && b < c) {
//             return `son ${a} ${b} ${c} 
//             Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
//         }
//         else{
//             return `Result = ${-a} , b = ${-b}, c = ${-c} `
//         }
//     }
//          console.log(son(2,4,6));
//          console.log(son(4,8,2));

// }

// {
//     // masala-17
//     function son( a, b, c) {
//         if ((a < b && b < c) || (a > b && b > c) ) {
//             return  `sonlar ${a} ${b} ${c} 
//             Result: a son ${a *= 2} ; b son ${b *= 2} ; c son ${c *= 2};`
//         }
//         else{
//             return `Result = ${-a} , b = ${-b}, c = ${-c} `
//         }
//     }

//     console.log(son(2,3,4));
//     console.log(son(4,6,8));
// }

// {
//     // masala-18
//     function son(a,b,c) {
//         if ( a === b) {
//             return `${a} = ${b} va c: ${c} soning tartib raqami 3`
//         }
//         else if(a === c){
//             return `${a} = ${c} va  b: ${b} soning tartib raqami 2`
//         }
//         else if(b === c){
//             return `${b} = ${c} va a: ${a} soning tartib raqami 1`
//         }
//     }

//      console.log(son( 5, 7, 2) );
//      console.log(son (2,5,2) );
//      console.log( son (3, 5, 5));

// }

// {
//     // masala-19
//     function son(a , b, c, n) {
//         if (a === b && a === c) {
//             return `${a} = ${b} = ${c} n:${n} soning tartib raqami 4`
//         } else if (a === b && a === n){
//             return `${a} = ${b} = ${n} c:${c} soning tartib raqami 3`
//         } else if (a === c && a === n){
//             return `${a} = ${c} = ${n} b:${b} soning tartib raqami 2`
//         } else if (b === c && b === n){
//             return `${b} = ${c} = ${n} a:${a} soning tartib raqami 1`
//         }    
//     }

//     console.log( son (2,2,2,5));
//     console.log(son (2,2,6,2));
//     console.log(son (5,2,5,5));
//     console.log(son (3,5,5,5));
// }

// {
//     // masala-20
//     function son(a, b, c) {
//                 let masofaAB = Math.abs(a-b);
//                 let masofaAC = Math.abs(a-c);
//                 if (masofaAB < masofaAC) {
//                     return `eng yaqin nuqta b, masofa ${masofaAB}`
//                 } else {
//                     return ` eng yaqin masofa c, masofa ${masofaAC}`
//                 }
//             }
//             console.log( son (6, 2, 8) );
//             console.log( son (5, 1, 10) );
// }