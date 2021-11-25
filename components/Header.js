import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logoImg from '../public/logo.png'
import styles from '../styles/Header.module.css'

function Header(props) {
  const [burgerActive, setBurgerActive] = useState(false)

  const handleBurgerClick = () => setBurgerActive(prev => !prev)

  return (
    <header className={styles.header}>
      <div className={styles.contacts}>
        <ul className={styles.contactList}>
          <li className={styles.listItem}>
            <i></i>
            <a className={styles.link}
               href="tel:<b>+7(495)132-74-00</b>">+7 (495) 132-74-00</a>
          </li>
          <li className={styles.listItem}>
            <i></i>
            <a className={styles.link}
               href="tel:<b>+7(925)04-777-92</b>">+7 (925) 04-777-92</a>
          </li>
          <li className={styles.listItem}>
            <i></i>
            <a className={styles.link}
               href="mailto:<b>zakaz@jurastone.ru</b>">zakaz@jurastone.ru</a>
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
              <Link href="#about">
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