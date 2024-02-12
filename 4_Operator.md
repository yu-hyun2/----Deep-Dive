> #### 참고한 내용
>
> [모던 자바스크립트 Deep Dive 교재](https://product.kyobobook.co.kr/detail/S000001766445) >[MDN JavaScript 사이트](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

# 07장 연산자

- 피연산자를 값으로 연산해서 새로운 값을 만드는 것

<br>

## 🧐 연산자 종류

### 1. 산술 연산자

- 산술 연산이 불가능하면 NaN 반환

```javascript
// 이항 산술 연산자(+, -, *, /, %)
// 피연산자 2개
9 + 2; // 11
9 - 2; // 7
9 * 2; // 18
9 / 2; // 4.5
9 % 2; // 1

// 단항 산술 연산자(++, --)
// 피연산자 1개
var x = 529,
  result;
result = x;
console.log(x, result); // 529 529

// 후위 증가
result = x++; // 529를 result에 할당하고 x + 1
console.log(x, result); // 530 529

// 후위 감소
result = x--; // 530을 result에 할당하고 x - 1
console.log(x, result); // 529 530

// 전위 증가
result = ++x; // 529를 result에 할당하기 전에 x + 1
console.log(x, result); // 530 530

// 전위 감소
result = --x; // 530을 result에 할당하기 전에 x - 1
console.log(x, result); // 529 529
```

> - 단항 산술 연산에서 증가/감소 연산자는 피연산자의 값을 변경함
> - 위의 예시에서 x의 값이 변하는 것을 볼 수 있음
> - 값을 새로 만들지 않고 바꾸는 경우에 부수 효과가 있다고 함
> - 즉, 증가/감소 연산자는 부수 효과를 가진다.

단항 산술 연산자에서 +, -는 양수, 음수를 뜻한다.
특히 + 단항 연산자는 암것도 안 함,,
근데 이제 ⭐**숫자 타입이 아니면**⭐ 말이 달라짐

#### 🧐 예를 들어 boolean `true` 값을 변수에 할당하면 어떻게 되는지 보자.

```javascript
var x = true;
console.log(x); // true
console.log(+x); // 1
console.log(x); // true (부수 효과는 없다)
console.log(-x); // -1
```

- 변수 앞에 `+`를 사용하니 `true`를 숫자 타입인 `1`로 변환해 출력한다.
- 하지만 `x`를 다시 확인해 봤을 때 `x`의 값이 변하진 않아 부수 효과는 없는 것으로 확인할 수 있다.
- 바뀌면 x가 true에서 숫자 1이 되어버리니까 ,,, 좀 글치
- false로 실행했을 때 0 앞에도 -가 붙을까?

```javascript
var x = false;
console.log(x); // false
console.log(+x); // 0
console.log(x); // false
console.log(-x); // -0
```

- OOOOOOOOOOO 붙음 ㅋ

  <br>

#### 🧐 문자열도 한번 보자.

```javascript
// 문자열 타입의 숫자
var x = '1';
console.log(x, typeof x); // 1 string
console.log(+x, typeof +x); // 1 number
console.log(x, typeof x); // 1 string
console.log(-x, typeof -x); // -1 number
```

- 타입이 변한 것을 볼 수 있다.

```javascript
// 문자열
var x = 'Hi oigu';
console.log(x, typeof x); // Hi oigu string
console.log(+x, typeof +x); // NaN number
console.log(-x, typeof -x); // NaN number
```

- Not a Number를 의미하는 `NaN`이 반환됨을 확인할 수 있다.
- 타입은 number로 나옴

  <br>

#### ✅ 문자열 연결 연산자

```javascript
// 문자열 연결 연산자

// 하나 이상이 문자열이면 문자열 연결 연산자로 동작
5 + '2' + '9'; // 529

// 그 외는 산술 연산자로 동작
1 + true; // 2  true 1로 암묵적 타입 변환
1 + null; // 1  null은 0으로 타입 변환

// undefined는 산술 연산이 불가해 NaN으로 수행
1 + undefined; // NaN
```

<br>
<br>

### 2. 할당 연산자

```javascript
var x;

x = 2;
console.log(x); // 2

x += 9; // x = 2 + 9;
console.log(x); // 11

x -= 5; // x = 11 - 5;
console.log(x); // 6

x *= 2; // x = 6 * 2;
console.log(x); // 12

x %= 5; // x = 12 % 5;
console.log(x); // 2

x /= 5; // x = 2 / 5;
console.log(x); // 0.4

// 문자열에서도 적용 가능
var str = 'Hello ';
str += 'world';
console.log(str); // Hello world
```

> - 예시를 보면 변수 x에 값이 할당되어 x의 값이 변하는 것을 볼 수 있다.

- 즉, 할당 연산자는 부수 효과가 있다.

<br>
<br>

### 3. 비교 연산자

- 동등 비교 연산자(값이 같은지 비교) ➡️ 느슨 - 암묵적 타입변환
- 일치 비교 연산자(값과 데이터 타입 둘다 같은지 비교) ➡️ 엄격

```js
console.log(1 === 1); // true (값과 타입 일치)
console.log('hello' === 'hello'); // true (값과 타입 일치)

// 1
console.log('1' === 1); // false (값만 일치)
console.log(0 === false); // false (값만 일치)

// 2
console.log('1' == 1); // true (값만 일치)
console.log(0 == false); // true (값만 일치)
```

- 위에서 1번과 2번의 차이는 뭘까. 모두 같은 내용이지만 연산자 하나가 다르다.
- `==` 동등 비교 연산자는 두 피연산자를 비교할 때 "**암묵적 타입 변환**"으로 타입을 일치시키고 값을 비교하기 때문에 데이터 타입이 달라도 `true`를 반환한다.
- `===` 일치 비교 연산자는 두 피연산자의 타입이 같고 값도 같은 경우에 `true`를 반환한다.

> 두 타입 중 동등 비교 연산자보다 일치 비교 연산자`===`를 사용하는 것이 좋다.
> 동등 비교 연산자`==`는 암묵적 타입 변환으로 결과 값을 예측하기가 어렵다.
>
> ```js
> 0 == ''; // 이 코드를 확인했을 때, 당연히 false일 것 같지만? true를 반환
> 0 === ''; // 우리가 기대한 false가 봔환
>
> false == 'false'; // false
> false === 'false'; // false
>
> false == 0; // true
> false === 0; // false
> ```

이렇게 여러 예시로 살펴보면 우리가 좌변 우변이 같을 것이라 예상하거나, 다를 것이라고 예상하는 것과 다르게 반환될 수 있으므로 (예측하기 어려우므로), 일치 비교 연산자인 `===`을 사용하는 것이 좋다 !

- 동등 비교와 일치 비교는 `==` `===`
- 부동등 비교와 부일치 비교는 `!=` `!==` (가장 앞의 =을 !로 바꿔주자..)

  <br>

#### ⭐ 일치 비교 연산자 주의

1. `NaN`은 유일하게 자신과 일치하지 않는다.

```js
NaN === NaN; // false

// NaN인지 확인하는 함수
// 숫자가 NaN인지 확인하려면 Number.isNaN 함수를 통해 확인할 수 있다.
Number.isNaN(NaN); // true
```

2. 양의 0, 음의 0은 비교했을 때, `true` 반환

```js
0 === -0; // true
0 == -0; // true
```

3. ES6에서 도입된 `Object.is` 메서드는 예측 가능한 정확한 비교 결과 반환

```js
-0 === +0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true
```

<br>
<br>

### 4. 삼항 조건 연산자

- 조건식의 평과 결과에 따라 반환할 값을 결정
- 자바스크립트에서 유일한 삼항 연산자

> ##### 조건식 **`?`** true일 때 반환 값 **`:`** false일 때 반환 값
>
> ```js
> var result = score >= 60 ? 'pass' : 'fail';
> ```
>
> 조건식 : `score 값이 60 이상` > `score 값이 60 이상`이면 `result`에 '`pass`' 할당, 그렇지 않으면 '`fail`' 할당
> (score >= 60) === false이면 'fail'을 result에 할당
> (score >= 60) === true이면 'true'를 result에 할당

- 조건식은 불리언 타입의 값으로 평가됨.
- 만약 결과가 불리언 값이 아니면 암묵적 타입 변환된다.

```js
var x = 2,
  result;

if (x % 2) result = '홀수';
else result = '짝수';

console.log(result); // 짝수
```

  <br>

#### ⭐ 삼항 조건 연산자와 if...else 문의 차이

| 삼항 조건 연산자           | 조건문                                                |
| -------------------------- | ----------------------------------------------------- |
| 표현식                     | 표현식이 아닌 문                                      |
| 값처럼 사용 가능           | 값처럼 사용 불가능                                    |
| 조건에 따라 결정할 때 유용 | 조건에 따라 수행해야 할 문이 여러 개일 때 가독성 Good |

<br>
<br>

### 5. 논리 연산자

- 나는 논리 연산자랑 비트 연산자랑 헷갈릴 때가 있어 함께 정리했다.

#### 논리 연산자

| 논리 연산자 | 설명                                                                        |
| :---------: | --------------------------------------------------------------------------- |
|    `&&`     | 논리 AND: 모든 조건이 참일 때 true를 반환, 하나라도 거짓이면 false          |
|    \|\|     | 논리 OR: 하나 이상의 조건이 참일 때 true를 반환, 모든 조건이 거짓이면 false |
|     `!`     | 논리 NOT: 주어진 조건을 반전                                                |

#### 비트 연산자

| 비트 연산자 | 설명                                                                           |
| :---------: | ------------------------------------------------------------------------------ |
|     `&`     | 비트 AND: 각 비트별로 AND 연산 수행                                            |
|     \|      | 비트 OR: 각 비트별로 OR 연산 수행                                              |
|     `~`     | 비트 NOT: 각 비트를 반전                                                       |
|     `^`     | 비트 XOR: 두 비트가 서로 다를 때 1, 모든 비트가 1이거나 모든 비트가 0일 때는 0 |
|    `<<`     | 비트를 왼쪽으로 이동하는 비트 시프트 연산자                                    |
|    `>>`     | 비트를 오른쪽으로 이동하는 비트 시프트 연산자                                  |

>

- 비트 연산자는 모두 1(참)이거나 모두 0(거짓)일 때 0(false)를 수행하는 XOR(배타적 논리합)도 있다. 또.. 2진법에 사용하는 연산자라 그런가 << >> 시프트 연산자도 있다.
- 시프트 연산자는 주어진 비트를 왼쪽이나 오른쪽으로 이동시키는데, 왼쪽 시프트는 2진법에서 2의 거듭제곱과 같은 효과를 냄 o0o!!!!
  - 참고) 비트는 2진법의 한 자리 숫자를 의미

<br>

### .. 그 외의 연산자

- 쉼표 연산자
- 그룹 연산자
- typeof 연산자
- 지수 연산자
- 옵셔널 체이닝
- null 병합
- delete
- new
- instanceof
- in

<br><br>

## 연산자 부수 효과

delete, 할당 연산자, 증가/감소 연산자는 다른 코드에 영향을 주는 부수 효과가 있다.

<br><br>

## 연산자 우선순위

[MDN - 연산자 우선순위](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

연산자 종류가 많아서 우선순위를 기억하기 어려움
MDN에서 가볍게 살펴보고 우선순위가 높은 걸 위주로 사용하는 것을 권장

![alt text](.\image\연산자우선순위.png)
...
