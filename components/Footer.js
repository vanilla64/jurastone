import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2018 Юрский камень.</div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="#main">
              <a className={styles.link}>Главная</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#catalog">
              <a className={styles.link}>Каталог юрского мрамора</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#certificates">
              <a className={styles.link}>Сертификаты</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#work">
              <a className={styles.link}>Применение</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#gallery">
              <a className={styles.link}>Галерея</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#about">
              <a className={styles.link}>О нас</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#contacts">
              <a className={styles.link}>Контакты</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
