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
