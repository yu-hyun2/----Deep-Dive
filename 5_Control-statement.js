/* break문 */

// 레이블

// outer: for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     if (i + j === 3) break outer;
//     console.log(`${i}, ${j}`);
//   }
// }

// 인덱스
// var string = 'Hello';
// var search = 'l';
// var index;

// for (var i = 0; i < string.length; i++) {
//   if (string[i] === search) {
//     index = i;
//     break;
//   }
// }
// console.log(index);

// console.log(string.indexOf(search));

// for (var i = 0; i < 4; i++) {
//   console.log(i);
// }
// for (var j = 0; j < 4; ++j) {
//   console.log(j);
// }

// 전위.후위 연산

// var result;
// var a = 10,
//   b = 5;

// console.log(a++, ++b); // 10 6

// result = a++ + --b;
// console.log(result); // 16

// result = ++a + b--;
// console.log(result); // 18

/* continue문 */
// 중단하고 증감식으로 이동

// var string = 'Hello';
// var search = 'l';
// var count = 0;

// // 1. continue
// for (var i = 0; i < string.length; i++) {
//   if (string[i] !== search) continue;
//   count++;
// }
// console.log(count); // 2

// count = 0;

// // 2. 메서드 사용
// const regexp = new RegExp(search, 'g');
// console.log(string.match(regexp).length); // 2

// count = 0;

// // 3. if 문 활용
// for (var j = 0; j < string.length; j++) {
//   if (string[j] === search) count++;
// }

// console.log(count);

/* 프로그래머스 기초테스트 */

// function solution(my_string, overwrite_string, s) {
//   var answer = my_string;
//   for (var i = Number(s); i < overwrite_string.length; i++) {
//     answer[i] += overwrite_string[s - i];
//   }

//   return answer;
// }

// console.log(solution('He11oWor1d', 'lloWorl', 2));

// var my_string = 'He11oWor1d';
// var overwrite_string = 'lloWorl';
// var s = Number(2);

// var answer = my_string.toString();
// answer[s] = overwrite_string[0];

// console.log(answer);

// // 1. my_string을 그대로 베껴오고 overwrite_string 범위만 교체
// // 2. s 이전 my_string 범위 불러오고 overwrite_string 범위 불러오고 나머지 my_string 불러오기

// function solution(str1, str2) {
//   var answer = '';
//   return answer;
// }

// var str1 = 'aaaaa';
// var str2 = 'bbbbb';
// var answer = '';

// for (i = 0; i < str1.length; i++) {
//   answer += str1[i] + str2[i];
// }

// // answer += str1[0] + str2[0] + str1[1] + str2[1] + str1[2] + str2[2];

// console.log(answer);

// function solution(a, b) {
//   var answer = 0;
//   var result1 = String(a) + String(b);
//   var result2 = String(b) + String(a);

//   answer = Number(result1) > Number(result2) ? result1 : result2;
//   return answer;
// }

// function solution(a, b) {
//   var answer = 0;
//   var result1 = Number(String(a) + String(b));
//   var result2 = 2 * a * b;

//   answer = result1 > result2 ? result1 : result2;
//   if (answer === 0) answer = result1;
//   return answer;
// }

// function solution(my_string, overwrite_string, s) {
//   var answer = '';

//   for (var i = 0; i < s; i++) {
//     answer += my_string[i];
//   }
//   answer += overwrite_string;

//   if (answer.length < my_string.length) {
//     answer += my_string[s + overwrite_string.length];
//   }

//   return answer;
// }

// console.log(solution('He11oWor1d', 'lloWorl', 2));
// console.log(solution('Program29b8UYP', 'merS123', 7));

//https://school.programmers.co.kr/learn/courses/30/lessons/181943#

// function solution(my_string, overwrite_string, s) {
//   var answer = '';

//   for (var i = 0; i < my_string.length; i++) {
//     answer +=
//       (i >= s) & (i - s < overwrite_string.length)
//         ? overwrite_string[i - s]
//         : my_string[i];
//   }

//   return answer;
// }

// console.log(solution('He11oWor1d', 'lloWorl', 2));
// console.log(solution('Program29b8UYP', 'merS123', 7));

// function solution(arr) {
//   var answer = '';
//   for (var i = 0; i < arr.length; i++) {
//     answer += arr[i];
//   }
//   return answer;
// }

// console.log(solution(['a', 'b', 'c']));

// function solution(my_string, n) {
//   var answer = '';

//   for (var i = my_string.length - n; i < my_string.length; i++) {
//     answer += my_string[i];
//   }
//   return answer;
// }
// console.log(solution('ProgrammerS123', 11));
// console.log(solution('He110W0r1d', 5));

// function solution(age) {
//   var answer = 0;
//   answer = 2022 - age + 1;
//   return answer;
// }
// console.log(solution(40));

// function solution(angle) {
//   var answer = 0;
//   if (angle < 90) {
//     answer = 1;
//   } else if (angle === 180) {
//     answer = 4;
//   } else if (angle === 90) {
//     answer = 2;
//   } else {
//     answer = 3;
//   }
//   return answer;
// }

// function solution(n) {
//   var answer = 0;
//   for (var i = 0; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// console.log(solution(10));

// function solution(a, b, flag) {
//   var answer = 0;

//   answer = flag === true ? a + b : a - b;

//   return answer;
// }

// console.log(solution(-4, 7, true));
// console.log(solution(-4, 7, false));

// function solution(rny_string) {
//   var answer = '';
//   for (var i = 0; i < rny_string.length; i++) {
//     answer += rny_string[i] === 'm' ? 'rn' : rny_string[i];
//   }
//   return answer;
// }

// console.log(solution('materpiece'));

// function solution(number, n, m) {
//   var answer = 0;
//   answer = number % n == 0 && number % m == 0 ? 1 : 0;
//   return answer;
// }

// console.log(solution(60, 2, 3));

// function solution(ineq, eq, n, m) {
//   var answer = 0;

//   if (ineq === '<') {
//     answer = n < m;
//     if (eq === '=') {
//       answer = n <= m;
//     }
//   } else if (ineq === '>') {
//     answer = n > m;
//     if (eq === '=') {
//       answer = n >= m;
//     }
//   }
//   answer = answer === true ? 1 : 0;

//   return answer;
// }
// console.log(solution('<', '=', 20, 50));
// console.log(solution('>', '!', 41, 78));

// function solution(code) {
//   var ret = '';
//   var mode = 0;
//   for (var i = 0; i < code.length; i++) {
//     if (mode == 0) {
//       if ((code[i] !== '1') & (i % 2 === 0)) {
//         ret += code[i];
//       } else if (code[i] == '1') {
//         mode = 1;
//       }
//     } else {
//       if ((code[i] !== '1') & (i % 2 !== 0)) {
//         ret += code[i];
//       } else if (code[i] == '1') {
//         mode = 0;
//       }
//     }
//   }
//   if (ret == '') {
//     ret = 'EMPTY';
//   }
//   return ret;
// }

// console.log(solution('abc1abc1abc'));

// function solution(a, d, included) {
//   var answer = 0;

//   for (var i = 0; i < included.length; i++) {
//     if (included[i] === true) {
//       answer += a + i * d;
//     }
//   }

//   return answer;
// }

// console.log(solution(3, 4, [true, false, false, true, true]));
// console.log(solution(7, 1, [false, false, false, true, false, false, false]));

// function solution(myString, pat) {
//   var answer = 0;
//   if (myString.toLowerCase().includes(pat.toLowerCase())) {
//     answer = 1;
//   }

//   return answer;
// }

// console.log(solution('AbCdEfG', 'aBc'));

var i = 1;
console.log(Math.floor(i));
