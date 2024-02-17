// 여러 가지 방식의 양수 음수 영 구분

// num 확인
var num = 0;
var kind;
console.log(num);

//
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind);

if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind);

var result = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(result);
