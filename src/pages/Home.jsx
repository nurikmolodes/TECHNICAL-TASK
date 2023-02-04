import Hamburger from "hamburger-react";
import React from "react";
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

const Home = () => {
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
        <div className="burger">
          <Hamburger color="grey" size={30} />
        </div>
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
            {data.map((item, index) => (
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
                  <img src={deleted} alt="" />
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
    </div>
  );
};

export default Home;
