> #### 참고한 내용
>
> [모던 자바스크립트 Deep Dive 교재](https://product.kyobobook.co.kr/detail/S000001766445)
> [MDN JavaScript 사이트](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

<br>

# 08장 제어문

---

## 1. 블록문

- 블록문 = 코드 블록 = 블록
- 하나의 실행 단위
- { } 0개 이상의 문을 중괄호로 묶은 것
- **세미콜론을 붙이지 않음**

<br><br>

## 2. 조건문

- 조건이 될 수 있는 값은 Boolean

<br>

### ✔️ if ... else 문

```js
// 여러 가지 방식의 양수 음수 영 구분

// num 확인
var num = 0;
var kind;
console.log(num); // 0

// 조건문으로 양수 음수 구분
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 영

// {} 중괄호 없는 조건문 사용
if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';

console.log(kind); // 영

// 삼항연산자로 양수 음수 구분
var result = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(result); // 영
```

> 중괄호 없이 조건문 사용이 가능하지만, 간단하지 않은 조건문에서는 가독성을 위해 중괄호를 작성하는 게 좋다.
> 특히, 중첩된 경우의 조건문에서는 중괄호를 사용해서 명시적으로 표현해야 디버깅이 용이하다.

<br><br>

### ✔️ switch 문

```js
// switch 윤년

// 윤년 계산 알고리즘
// 1. 연도가 4로 나누어 떨어짐
// 2. 연도가 4로 나누어 떨어져도 100으로 나누어 떨어지면 평년
// 3. 연도가 400으로 나누어 떨어짐

// years % 4 === 0 ?

// years % 100 !== 0 ?

// years % 400 === 0 ?

// 1. 400으로 나누어 떨어지냐?
// No -> 2
// Yes -> 윤년

// 2. 100으로 나누어 떨어지냐?
// No -> 3
// Yes -> 평년

// 3. 4로 나누어 떨어지냐?
// No -> 평년
// Yes -> 윤년

var year = 2024;
var month = 2;
var days = 20;
var result;

if (year % 400) {
  result = '윤년';
} else if (year % 100) {
  result = '평년';
} else if (year % 4) {
  result = '윤년';
} else {
  result = '평년';
}
console.log(result); // 윤년

// switch
// 각 month별 일수 계산
// 31일 1 3 5 7 8 10 12
// 30일 3 6 9 11
// 애매해 2월 - 윤년 고려 28, 29

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;

  case 2:
    days = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? 29 : 28;
    // True면(윤년이면) 29 False면 28를 반환
    break;

  default:
    days = 'Invalid days';
}

console.log(days); // 29
```

<br>

> ### switch

- case, default, break 등 다양한 키워드 사용
- 폴스루 발생 등 문법 복잡
- switch 문을 지원하지 않는 프로그래밍 언어도 있음
  > > **폴스루 `fall through`**
  > > break가 없어 switch 문을 탈출하지 않고 모든 case 문과 default 문을 실행하는 것
  > > 위에서 윤년 구한 코드가 폴스루를 활용한 switch 문

<br><br><br>

## 3. 반복문

<br>

### ✔️ for 문

```js
// for 문 작성
for (변수선언.할당; 조건식; 증감식) {
  조건식이 참일 때 반복 실행될 문;
}
```

- 변수 선언문, 조건식, 증감식 모두 옵션
- 어떤 식도 선언하지 않으면 무한루프..
  `for(;;) { ... }`

<br>

#### 중첩 for 문

```js
// for
for (var i = 0; i < 10; i++) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9 (밑으로)
}

// 두 개의 주사위 , 두 눈의 합이 6인 경우
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`(${i}, ${j})`);
  }
}
```

> #### 반복문 대체 가능한 기능들
>
> `forEach` 메서드 - 배열 순회
> `for... in` 문 - 객체의 프로퍼티 열거
> `for... of` 문 - 이터러블 순회

<br><br>

### ✔️ while 문

- 조건식의 평가 결과에 따라 반복 결정
- while 안의 조건식의 평과 결과가 불리언 값이 아니면 강제 변환으로 논리적 참, 거짓 구별
  ➡️ 나는 이 부분이 조금 헷갈렸다(falsy한 값과 혼동)

> ### 🤔 Boolean 개념, 조건문 개념 다시 잡자
>
> 데이터가 없거나 유효하지 않으면 `false`에 속함
> 0, -0, null, false, NaN, undefined, ""
>
> 근데 비어있는 배열은 객체 그 자체기 때문에 `true`임

변수를 선언하고 값을 할당하지 않으면 undefined라 `false`

![](https://velog.velcdn.com/images/oigu529/post/8136188e-fad1-4aad-a2eb-d10767ef93ca/image.png)

> TypeError: Cannot read properties of undefined (reading 'name')

<br>

#### `console.log(obj.name);` ➡️ `obj && console.log(obj.name);`

```js
// 1
if (obj) {
  console.log(obj.name);
}

// 2 이 방법으로 더 자주 쓰인다(간결)
obj && console.log(obj.name);

//obj가 false면 출력하지 않고
//obj에 값이 있어서 true로 평가되면 obj의 값을 출력한다.
```

&& 연산자는 앞의 문이 true면 뒤의 문을 실행하기 때문에 if 대신 활용 가능..!..

<img src="https://velog.velcdn.com/images/oigu529/post/952ac59d-325c-45d7-b690-8f8f1201837b/image.gif" width="300px">

<br>

[MDN - Boolean](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<br><br>

### ✔️ do ... while 문

일단 실행하고 조건식 평가 ➡️ 코드 블록 무조건 한 번 이상 실행

```js
// do...while
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 3);
```

```js
// while
var count = 0;

while (count < 3) {
  console.log(count);
  count++;
}
```

> #### `while`과의 차이를 확인했을 때,
>
> `do while`은 일단 출력하고 나서 count가 3보다 작은지 확인하고
> `while`은 count가 3보다 작아야만 실행(출력)을 했다.
>
> 예를 들어 둘다 count가 4로 할당되고 시작하면
> `do while`은 4가 출력이 되고 중단되지만, `while`은 아무 것도 출력되지 않는다.

<br><br>

### ⭐ 반복문 비교

> `for` 반복횟수 명확
> `while` 반복횟수 불명확
> `do while` 일단 실행 후 평가

<br><br><br>

## 4. break 문

- 레이블 문, 반복문, switch 문에서 사용
- 외에 사용 시 SyntaxError(문법에러)
- 불필요한 반복을 피할 수 있음

<br>

### ✔️ 레이블 문

- 프로그램 실행 순서 제어

```js
foo: console.log('foo'); // foo

foo: {
  console.log(1); // 1
  break foo;
  console.log(2);
}

console.log('Done!'); // Done!
```

- 이렇게 레이블 문에 break문을 사용해서 실행을 중단할 수 있다.
- break 문에 레이블 식별자를 지정해서 해당 레이블 문을 탈출한다.

레이블 문은 중첩 for 문 외부로 탈출할 때 유용 ➡️ 그 밖엔 가독성이 나빠지니 권장하지 않음

<br>

### ✔️ 문자열에서 인덱스 검색

```js
// 인덱스
var string = 'Hello';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break; // l에 해당하는 인덱스면 멈춤
  }
}
console.log(index); // 2

// 메서드 사용
console.log(string.indexOf(search)); // 2
```

<br>

> ### 갑자기 정리해 보는 전위, 후위 연산

```js
var result;
var a = 10, b = 5;
>
console.log(a++, ++b); // 10 6
>
result = a++ + --b;
console.log(result); // 16
>
result = ++a + b--;
console.log(result); // 18
```

>

<br>
<br><br>

## 5. continue 문

- 실행을 중단하고 증감식으로 이동

```js
var string = 'Hello';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue; // string[i]가 l이 아니면 count++ 하지 않고 증감식(i++)으로 이동
  count++; // string[i] 값이 l이면 count++ 하고 증감식(i++)으로 이동
}
console.log(count);
```

```js
/* continue문 */
// 중단하고 증감식으로 이동

var string = 'Hello';
var search = 'l';
var count = 0;

// 1. continue
for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;
  count++;
}
console.log(count); // 2

count = 0;

// 2. 메서드 사용
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 2

count = 0;

// 3. if 문 활용
for (var j = 0; j < string.length; j++) {
  if (string[j] === search) count++;
}

console.log(count);
```

> if 문이 너무 길어서 들여쓰기를 한 번 더 해야 하는 게 아니라면, continue보다 if를 사용하는 게 간편하고 가독성이 좋다.

<br><br>
