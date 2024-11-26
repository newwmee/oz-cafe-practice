import { createContext, useContext } from "react";
import data from "../assets/data";

// 1. createContext 로 전역 상태 만들기
const menuContext = createContext();

// 2. Provider 생성
export function MenuProvider({ children }) {
  return (
    // 3. value 값에 children에서 사용할 상태 값 넣어주기
    <menuContext.Provider value={{ menu: data.menu }}>
      {children}
    </menuContext.Provider>
  );
}
// 4. main.jsx로 이동하여 생성한 Provider로 <App/> 컴포넌트를 감싸기

// 5. useContext로 전역상태 가져오기
export function useMenu() {
  return useContext(menuContext);
}
