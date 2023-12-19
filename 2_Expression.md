> #### 참고한 교재
>
> [모던 자바스크립트 Deep Dive](https://product.kyobobook.co.kr/detail/S000001766445)

<br>

# 05장 표현식과 문

![value](Modern-JavaScript-Deep-Dive/image/value.png)

## 값 value

- **값**: 식(표현식)이 평가되어 생성된 결과, 변수에 할당되는 것
- **평가**: 식을 해석해서 값을 생성하거나 참조
- **변수**: 하나의 값을 저장하기 위해 확보한 메모리 공간을 식별하기 위해 붙인 이름

#### 특징

> 모든 값은 데이터 타입을 가짐
> 메모리에 2진수, 즉 비트의 나열로 저장
> 메모리에 저장된 값은 데이터 타입에 따라 다르게 해석될 수 있음

<br>

## 리터럴 literal

- 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법(notation)
- 값을 표기하기 위해 미리 약속한 표기법
- '', "", [] {} 등

### 자바스크립트 리터럴 종류

<table border="1">
    <thead>
      <tr>
        <th>종류</th>
        <th>예시</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>정수 리터럴</td>
        <td><code>42</code>, <code>-10</code>, <code>0x1A</code> (16진수)</td>
        <td>음수와 16진수 표기법도 가능</td>
      </tr>
      <tr>
        <td>부동 소수점 리터럴</td>
        <td><code>3.14</code>, <code>-0.01</code>, <code>2.0e3</code> (지수 표기)</td>
        <td>소수점이나 지수 표기법을 사용할 수 있음</td>
      </tr>
      <tr>
        <td>문자열 리터럴</td>
        <td><code>"Hello, World!"</code>, <code>'A'</code>, <code>"123"</code></td>
        <td>문자의 나열, 큰 따옴표나 작은 따옴표로 감싸짐</td>
      </tr>
      <tr>
        <td>불리언 리터럴</td>
        <td><code>true</code>, <code>false</code></td>
        <td>참(True) 또는 거짓(False)</td>
      </tr>
      <tr>
        <td>null 리터럴</td>
        <td><code>null</code></td>
        <td>값이 없음</td>
      </tr>
      <tr>
        <td>undefined 리터럴</td>
        <td><code>undefined</code></td>
        <td>값이 정의되지 않았음</td>
      </tr>
      <tr>
        <td>객체 리터럴</td>
        <td><code>{ key: value, key2: value2 }</code></td>
        <td>키와 값의 쌍으로 이루어진 객체를 초기화</td>
      </tr>
      <tr>
        <td>함수 리터럴</td>
        <td><code>function(x) { return x * 2; }</code></td>
        <td>함수를 정의, 변수에 할당하거나 다른 함수 내에서 사용될 수 있음</td>
      </tr>
      <tr>
        <td>정규 표현식 리터럴</td>
        <td><code>/pattern/g</code>, <code>/[a-z]/i</code></td>
        <td>문자열에서 패턴을 검색하는 데 사용되는 정규 표현식을 정의</td>
      </tr>
    </tbody>
  </table>

</body>
</html>

<br>

### 2진수, 8진수, 16진수 리터럴

  <table border="1">
    <thead>
      <tr>
        <th>종류</th>
        <th>예시</th>
        <th>비고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2진수 리터럴</td>
        <td><code>0b1010</code></td>
        <td>0b 표기 ES6부터 지원</td>
      </tr>
      <tr>
        <td>8진수 리터럴</td>
        <td><code>0o16</code></td>
        <td>0o 표기 ES6부터 지원</td>
      </tr>
      <tr>
        <td>16진수 리터럴</td>
        <td><code>0x1F</code></td>
        <td>0x 표기</td>
      </tr>
    </tbody>
  </table>

</body>

2진수, 8진수는 ECMAScript 2015 (ES6)부터 도입
최신 브라우저 및 Node.js 버전에서는 문제없이 사용 가능

```javascript
// 2진수 (Binary)
let binaryNumber = 0b1010; // 2진수 1010 (10진수로는 10)
console.log(binaryNumber); // 출력: 10

// 8진수 (Octal)
let octalNumber = 0o16; // 8진수 16 (10진수로는 14)
console.log(octalNumber); // 출력: 14

// 16진수 (Hexadecimal)
let hexNumber = 0xa; // 16진수 A (10진수로는 10)
console.log(hexNumber); // 출력: 10
```

<br>

## 표현식 expression

- 값으로 평가될 수 있는 문(statement)
- 표현식이 평가되면 새로운 값을 생성하거나 기존값 참조
- literal은 value로 평가되기 때문에 표현식임
- 리터럴, 식별자, 연산자, 함수 호출 등의 조합으로 이루어짐

### Example

> `var score = 50 + 50;`
> 50 + 50은 리터럴과 연산자로 이뤄져 있음
> 50 + 50도 평가되어 숫자 값 100을 생성하므로 표현식임
>
> `score; `
> 변수 식별자를 참조하면 변수 값으로 평가되므로 표현식임

```javascript
//리터럴 표현식
8;
('hi');

// 식별자 표현식
sum;
yh.name;
arr[0];

// 연산자 표현식
sum = 8;
50 + 50;

//함수 호출 표현식
yh.getName();
```

<br>

## 문 statement

- **문(statement)**: 프로그램을 구성하는 기본 단위이자 최소 실행 단위, 명령문
- **토큰(token)**: 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소

![statement](image/%EB%AC%B8.png)

```javascript
// 선언문
var x;

//할당문
x = 5;

// 선언문
function oi() {}

//조건문
if (x > 1) {
  console.log(x);
}

// 반복문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
```

<br>

## 세미콜론(;\)

- 세미콜론으로 문의 종료 위치 파악
- 문을 끝낼 때 세미콜론(`;`)을 붙여야 함
- 코드블록 `{}` 뒤에는 세미콜론을 붙이지 않음
  - if문, for문, 함수 등의 코드 블록은 자체 종결성을 가지기 때문

> - 세미콜론은 옵션임(생략 가능)
> - 세미콜론 자동 삽입 기능(ASI)이 암묵적으로 수행 됨
> - 하지만 ASI를 제대로 예측하지 못하고 코드를 작성하게 되면 원하는 결과가 나오지 않을 수 있으니 붙이는 걸 습관화하자.

<br>

## 표현식이 아닌 문

- 값으로 평가될 수 없는 문
- 변수에 할당해 보면 간단하게 구별할 수 있음

```javascript
// 표현식 x
var x;  // 변수 선언문 (표현식 x)
var oi = var x;  // SyntaxError: Unexpected token var

// 표현식 o
x = 888;  // 할당문 (표현식 o)
var oi = x = 888;  // 888을 할당한 x할당문을 값(888)처럼 변수에 할당
console.log(oi);  // 888
```
