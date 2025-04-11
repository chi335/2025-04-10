# React Hook 정리

## 🔹 Hook 등장 배경

- React 컴포넌트는 **함수형 컴포넌트(Functional Component)** 와 **클래스형 컴포넌트(Class Component)** 로 나뉩니다.
- 초기에는 함수형 컴포넌트를 사용했지만, **상태(state)** 관리나 **생명 주기(Lifecycle Methods)** 가 필요할 경우 클래스형 컴포넌트를 사용해야 했습니다.
- 클래스형 컴포넌트의 대표적인 단점:
  - 코드의 구성이 복잡하고 재사용성이 떨어짐
  - 컴파일 단계에서 코드 최적화가 어려움
  - 최신 기술의 적용이 효과적이지 않음

➡️ 이러한 단점을 보완하여 **함수형 컴포넌트**에서도 상태 관리와 생명주기 기능을 사용할 수 있도록 등장한 것이 **React Hook**입니다.

---

## 🔹 Hook 개요

- **React Hook**은 리액트 v16.8에 도입된 기능입니다.
- 함수형 컴포넌트에서 클래스형 컴포넌트의 기능을 사용할 수 있게 해주는 도구입니다.
- 대표적인 예: `useState`, `useEffect`

### ✅ Class Component vs Function Component

| 항목 | 클래스형 컴포넌트 | 함수형 컴포넌트 |
|------|------------------|------------------|
| 상태 정의 | `constructor`에서 `state` 사용 | `useState` 사용 |
| 생명 주기 | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | `useEffect`로 대체 |
| 재사용성 | 낮음 | 높음 (Custom Hook 가능) |

---

## 🔹 Hook 장점

1. **상태 로직 단순화**
   - 상태를 보다 간단하게 추가할 수 있어, 코드의 가독성이 향상됩니다.

2. **코드 재사용성과 관심사 분리**
   - 여러 컴포넌트 간의 상태 로직을 커스텀 훅으로 재사용 가능

3. **사이드 이펙트 감소**
   - `useEffect`를 통한 생명주기 관리로, 사이드 이펙트 처리 용이

---

## 🔹 `useState` Reference

### ✅ Parameters

- `initialState`: 상태의 초기값  
  - 모든 유형의 값 가능
  - 함수 전달 시 **초기화 함수**로 처리됨  
  - React는 최초 렌더링 시 한 번만 호출하여 초기 상태를 설정함

### ✅ Returns

`useState`는 다음 두 가지 요소를 포함한 배열을 반환합니다:

1. 현재 상태 값
2. 상태를 업데이트하는 **Set 함수**

### ✅ 예시 코드
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
