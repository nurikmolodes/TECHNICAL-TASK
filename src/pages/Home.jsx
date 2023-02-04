import Hamburger from "hamburger-react";
import React, { useState } from "react";
import call from "../assets/call.svg";
import email from "../assets/email.svg";
import burger from "../assets/burger.svg";
import catalog from "../assets/catalog.svg";
import cart from "../assets/cart.svg";
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
          <Hamburger  color="grey" size={30} />
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
          <input type="text" placeholder="Найти товар" />
        </div>
        <div className="cart">
          <img src={cart} alt="" />
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
            <img src={vector} alt="" />
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
          <div className="goods">
            {cart.map((item, index) => (
              <div>
                <div className="good">
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.articul}</p>
                  <div className="buttons">
                    <p>-</p>
                    <p>{item.amount}</p>
                    <p>+</p>
                  </div>
                  <h2>{item.price} с</h2>
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
        </div>

        <div className="right">
          <h2 className="order">Стоимость заказа</h2>
          <div className="first">
            <h3>Товары({data.length})</h3>
            <h2>1200с</h2>
          </div>
          <div className="second">
            <h3>Доставка</h3>
            <h2>Бесплатно</h2>
          </div>
          <div className="liner"></div>
          <div className="third">
            <h3>Итого</h3>
            <h2>1200с</h2>
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
          <div className="first">
            <p>Имя</p>
            <p>Татьяна</p>
          </div>
          <div className="second">
            <div className="one">
              <p>Телефон</p>
              <p>+996 555 50 50 50</p>
            </div>
            <div className="two">
              <p>Доб.</p>
              <p>0</p>
            </div>
          </div>
          <div className="third">
            <p>Доп телефон или whatsapp</p>
            <p>+996 555 50 50 50</p>
          </div>
        </div>
        <div className="pravoe">
          <div className="first">
            <p>Фамилия</p>
            <p>Смолянинова</p>
          </div>
          <div className="second">
            <p>E-mail</p>
            <p>Tatyana@gmail.com</p>
          </div>
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
          <div>
            <h3>Страна</h3>
            <h2>Кыргызстан</h2>
          </div>
          <div>
            <h3>Улица</h3>
            <h2>Чуй 345</h2>
          </div>
          <div>
            <h3>Дом</h3>
            <h2>1</h2>
          </div>
          <div>
            <h3>Город</h3>
            <h2>Бишкек</h2>
          </div>
          <div>
            <h3>Квартира</h3>
            <h2>53</h2>
          </div>
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
