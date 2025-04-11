# 📌 React Hook - useState()

## 🔍 개요

`useState()`는 React Hook 중 하나로, 함수형 컴포넌트에서 상태(state)를 관리할 수 있도록 해줍니다.  
React 16.8 버전부터 도입된 Hook 기능으로, 기존의 클래스형 컴포넌트에서 사용하던 `this.state`와 `this.setState`를 대체합니다.

---

## 📘 정의

> `useState` is a React Hook that lets you add a state variable to your component.

- 함수형 컴포넌트에서 상태를 정의하고, 해당 상태를 변경할 수 있는 함수를 제공
- 컴포넌트가 렌더링될 때마다 상태를 유지할 수 있도록 도와줌
- 변수 각각에 대한 `set` 함수가 따로 존재함

---

## 🧩 사용법

```jsx
import { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState(initialValue);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New Value')}>Change State</button>
    </div>
  );
}
# React Hooks 정리

## Hooks란?

> 특정 위치에 원하는 함수가 실행되도록 갈고리를 걸어두는 것

React의 Hook은 **함수형 컴포넌트에서도 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있도록 해주는 기능**입니다.  
Hook을 사용하면 클래스형 컴포넌트 없이도 React의 다양한 기능을 활용할 수 있어 코드가 간결하고 재사용성이 높습니다.

---

## Hook의 핵심 개념

- 기존에는 클래스형 컴포넌트에서만 상태와 생명주기를 관리할 수 있었음
- Hook의 등장으로 함수형 컴포넌트도 동등한 기능 수행 가능
- 코드 간결성, 재사용성, 테스트 용이성 향상

---

## Hook이란?

- 어떤 기능에 갈고리(Hook)를 거는 것처럼 **끼어들어 실행되는 함수**
- React에서의 Hook은 state와 생명주기에 갈고리를 걸어 원하는 시점에 함수가 실행되도록 만든 것
- 모든 Hook은 `use`로 시작 (예: `useState`, `useEffect`, `useCustomHook` 등)

---

## 대표적인 Hook: `useState()`

```js
const [state, setState] = useState(initialValue);

