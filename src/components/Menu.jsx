import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { useMenu } from "../context/menuContext";

// 전역 상태를 사용하여 코드를 수정해 주세요.
export function Menu() {
  //useMenu함수 사용  리턴값이 메뉴콘텍스트벨류값이 나옴 -객체 menu라는 키에 데이터가 들어있는값 나옴
  // useContext에서 menu 값 불러오기
  const { menu } = useMenu();

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} />
      ) : null}
    </>
  );
}

export default Menu;
