import Hamburger from "hamburger-react";
import React, { useState } from "react";
import call from "../assets/call.svg";
import email from "../assets/email.svg";
import burger from "../assets/burger.svg";
import catalog from "../assets/catalog.svg";
import cartt from "../assets/cart.svg";
import user from "../assets/user.svg";
import grey from "../assets/grey.svg";
import search from "../assets/search.svg";
import vector from "../assets/vector.svg";
import { data } from "../assets/data";
import deleted from "../assets/delete.svg";
import number from "../assets/number.svg";
import num from "../assets/num.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import logo from "../assets/logo.svg";
import emblema from "../assets/emblema.svg";
import redLine from "../assets/redLine.svg";

const Home = () => {
  const [cart, setCart] = useState(data);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.name !== id);
    setCart(arr);
  };
  const [open, setOpen] = useState(false);

  // SEARCH
  const [searchh, setSearch] = useState("");

  const filteredCart = cart.filter((item) => {
    return searchh?.toLowerCase() === ""
      ? item
      : item?.name?.toLowerCase().includes(searchh?.toLowerCase()) ||
          item?.articul?.toLowerCase().includes(searchh?.toLowerCase());
  });

  const totalPrice = cart.reduce(
    (price, item) => price + item.amount * item.price,
    0
  );

  const AddToCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, amount: ProductExist.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const RemoveFromCart = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.amount === 1) {
      setCart(cart.filter((item) => item.id === product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.amount - 1 }
            : item
        )
      );
    }
  };

  const [opened, setOpened] = useState(true);
  let down = opened ? "cartImage" : 'reverse';

  return (
    <div className="wrapper">
      {/* NAVBAR  */}
      <nav>
        <ul>
          <li>Каталог</li>
          <li>Акции</li>
          <li>Популярные товары</li>
          <li>Новинки</li>
          <li>Новости</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>
        <div className="burger" onClick={() => setOpen(!open)}>
          <Hamburger color="grey" size={30} />
        </div>
        {open && (
          <div className="modal">
            <a>Каталог</a>
            <a>Акции</a>
            <a>Популярные товары</a>
            <a>Новинки</a>
            <a>Новости</a>
            <a>О компании</a>
            <a>Контакты</a>
          </div>
        )}
        <div>
          <img src={email} alt="" />
          <img src={call} alt="" />
        </div>
      </nav>

      {/* HEADER  */}
      <header>
        <div className="grey">
          <img src={grey} alt="" />
          <img src={burger} alt="" />
        </div>
        <div className="catalog">
          <img src={catalog} alt="" />
        </div>
        <div className="search">
          <img src={search} alt="" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Найти товар"
          />
        </div>
        <div className="cart" style={{ position: "relative" }}>
          <div className="round">
            <h2>{cart.length}</h2>
          </div>
          <img src={cartt} alt="" />
          <img src={user} alt="" />
        </div>
      </header>

      {/* LINKS  */}
      <div className="links">
        <a>Главная/</a>
        <a>Корзина/</a>
        <a>Оформление заказа/</a>
      </div>

      {/* BIG TEXT  */}
      <div className="big-text">
        <h1>Оформление заказа</h1>
      </div>

      {/* CART  */}
      <div className="cartt">
        <div className="left">
          <div className="korzina">
            <h2>Корзина({data.length})</h2>
            <img
              className={down}
              onClick={() => setOpened(!opened)}
              src={vector}
              alt=""
            />
          </div>
          <div className="list">
            <ul>
              <li>Фото</li>
              <li>Название</li>
            </ul>
            <ul>
              <li>Артикул</li>
              <li>Кол-во</li>
              <li>Цена</li>
            </ul>
          </div>
          <div className="line"></div>
          {opened && (
            <div className="goods">
              {filteredCart.map((item, index) => (
                <div>
                  <div className="good">
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.articul}</p>
                    <div className="buttons">
                      <p onClick={() => RemoveFromCart(item)}>-</p>
                      <p>{item.amount}</p>
                      <p onClick={() => AddToCart(item)}>+</p>
                    </div>
                    <h2>{Number(item.price * item.amount)} с</h2>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(item.name)}
                      src={deleted}
                      alt=""
                    />
                  </div>
                  <div className="linee"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="right">
          <h2 className="order">Стоимость заказа</h2>
          <div className="first">
            <h3>Товары({data.length})</h3>
            <h2>{totalPrice}c</h2>
          </div>
          <div className="second">
            <h3>Доставка</h3>
            <h2>Бесплатно</h2>
          </div>
          <div className="liner"></div>
          <div className="third">
            <h3>Итого</h3>
            <h2>{totalPrice}c</h2>
          </div>
          <button>Потвердить заказ</button>
          <p>
            Подтверждая заказ, я принимаю условия{" "}
            <span>пользовательского соглашения</span>
          </p>
        </div>
      </div>

      {/* BIG TEXT */}
      <div className="bigText">
        <h1>Оформление заказа</h1>
      </div>

      {/* FORM  */}
      <form>
        <div className="levoe">
          <input
            className="first"
            type="text"
            placeholder="Имя"
            style={{ border: "none" }}
          />
          <div className="second">
            <input
              className="one"
              type="text"
              placeholder="Телефон"
              style={{ border: "none" }}
            />
            <input
              className="two"
              type="text"
              placeholder="Доб."
              style={{ border: "none" }}
            />
          </div>
          <input
            className="third"
            type="text"
            placeholder="Доп телефон или whatsapp"
            style={{ border: "none" }}
          />
        </div>
        <div className="pravoe">
          <input
            className="first"
            type="text"
            placeholder="Фамилия"
            style={{ border: "none" }}
          />
          <input
            className="second"
            type="text"
            placeholder="E-mail"
            style={{ border: "none" }}
          />
        </div>
      </form>

      {/* CHECKBOX  */}
      <div className="checkbox">
        <h3>Я</h3>
        <div>
          <input type="checkbox" className="check" />
          <p>Физическое лицо</p>
        </div>
        <div>
          <input type="checkbox" className="check" />
          <p>Юридическое лицо</p>
        </div>
      </div>

      {/* DOSTAVKA  */}
      <div className="dostavka">
        <h2>Доставка</h2>
        <div className="way-dostavka">
          <h2>Способ доставки</h2>
          <div>
            <input type="checkbox" className="check" />
            <p>
              Самовызов <span>режим работы магазина {">"}</span>
            </p>
          </div>
          <div>
            <input type="checkbox" className="check" />
            <p>
              Курьерская доставка <span>условия доставки {">"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ADDRESS  */}
      <div className="address">
        <h4>Адрес доставки</h4>
        <div className="shipping">
          <input type="text" placeholder="Страна" style={{ border: "none" }} />
          <input type="text" placeholder="Улица" style={{ border: "none" }} />
          <input type="text" placeholder="Дом" style={{ border: "none" }} />
          <input type="text" placeholder="Город" style={{ border: "none" }} />
          <input
            type="text"
            placeholder="Квартира"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* COMMENT  */}
      <div className="comment">
        <p>Указать домофон, этаж, подъезд и комментарий к адресу</p>
        <input type="text" placeholder="Комментарий" />
      </div>

      {/* FOOTER  */}
      <footer>
        <div className="top">
          <img src={emblema} alt="" />
          <img src={redLine} alt="" />
        </div>
        <div className="bottom">
          <div>
            <a className="bold">Меню</a>
            <a>Каталог</a>
            <a>Акции</a>
            <a>Популярные товары</a>
            <a>Новинки</a>
            <a>Новости</a>
            <a>О компании</a>
            <a>Контакты</a>
            <div className="gray">
              <img src={grey} alt="" />
              <img src={burger} alt="" />
            </div>
          </div>
          <div>
            <a className="bold">Категории</a>
            <a>Бумага</a>
            <a>Письмо и графика</a>
            <a>Канц товары</a>
            <a>Художественные товары</a>
            <a>Творчество</a>
            <a>Полиграфические материалы</a>
            <a>Распродажи</a>
            <a>Офисное оборудование</a>
            <a>Игры и игрушки</a>
            <a>Сувенирная продукция</a>
          </div>
          <div>
            <a className="bold">Контакты</a>
            <a className="boldd">Огонбаева, 222</a>
            <a>
              <img src={number} alt="" />
            </a>
            <a>
              <img src={num} alt="" />
            </a>
            <a className="boldd">Эркиндик, 7</a>
            <a>
              <img src={number} alt="" />
            </a>
            <a>
              <img src={num} alt="" />
            </a>
            <a className="boldd">Уметалиева, 84</a>
            <a>
              <img src={number} alt="" />
            </a>
            <a>
              <img src={num} alt="" />
            </a>
          </div>
          <div>
            <a className="bold">Мы в соц сетях</a>
            <a className="bold">
              <img src={instagram} alt="" />
            </a>
            <a className="bold">
              <img src={facebook} alt="" />
            </a>
            <a className="bold">
              <img src={whatsapp} alt="" />
            </a>
            <a style={{ marginTop: "110px" }} className="bold">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
        <hr className="theVeryBottom" />
        <div className="center">
          <h5 className="theVeryBottomText">
            Kanzler & Burger (c) 2017. All rights reserved
          </h5>
        </div>
      </footer>
    </div>
  );
};

export default Home;
