import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logoImg from '../public/logo.png'
import styles from '../styles/Header.module.css'

function Header({ onMailClick }) {
  const [burgerActive, setBurgerActive] = useState(false)

  const handleBurgerClick = () => setBurgerActive(prev => !prev)

  return (
    <header className={styles.header}>
      <div className={styles.contacts}>
        <ul className={styles.contactList}>
          <li className={styles.listItem}>
            <i></i>
            {/*<a className={styles.link}*/}
            {/*   href="mailto:zakaz@jurastone.ru">zakaz@jurastone.ru</a>*/}
            <a onClick={onMailClick} className={styles.link}>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095eb"
                   viewBox="0 0 16 16" className={styles.iconMail}>
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>

              {/*// href="mailto:zakaz@jurastone.ru">zakaz@jurastone.ru*/}
            </a>
          </li>

          <li className={styles.listItem}>
            <i></i>
            <a className={styles.link}
               href="tel:+7(495)132-74-00">+7 (495) 132-74-00</a>
          </li>
          <li className={styles.listItem}>
            <i></i>
            <a className={styles.link}
               href="tel:+7(925)04-777-92">+7 (925) 04-777-92</a>
          </li>

        </ul>
      </div>
      <div className={styles.navbar}>
        <div>
          <Image className={styles.logo}
                 src={logoImg}
                 width={131}
                 height={70}/>
        </div>
        <nav>
          <ul className={burgerActive ? `${styles.navList} ${styles.navList_active}` : styles.navList }>
            <li className={styles.navListItem}>
              <Link href="#main">
                <a className={styles.navLink}>Главная</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#catalog">
                <a className={styles.navLink}>Каталог юрского мрамора</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#certificates">
                <a className={styles.navLink}>Сертификаты</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#work">
                <a className={styles.navLink}>Применение</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#gallery">
                <a className={styles.navLink}>Галерея</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#aboutUs">
                <a className={styles.navLink}>О нас</a>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link href="#contacts">
                <a className={styles.navLink}>Контакты</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div onClick={handleBurgerClick}
             className={burgerActive ? `${styles.burger} + ${styles.burger_active}` : styles.burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>

    </header>
  );
}

export default Header;