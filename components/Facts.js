import React from 'react'
import styles from '../styles/Facts.module.css'
import SectionTitleCenter from "./SectionTitleCenter"
import QuickFact from "./QuickFact";
import FactsGrid from "./FactsGrid";

function Facts() {
  return (
    <section className={styles.facts}>
      <div className="container">
        <SectionTitleCenter title={'Факты о нас'} />
        <div className={styles.wrapper}>
          <QuickFact number={4} heading={'Карьера'} text={'4 карьерах в окрестностях Каира'} />
          <QuickFact number={10} heading={'Лет Работы'} text={'Работаем с камнем более 10 лет'} />
          <QuickFact number={4} heading={'метров кв.'} text={'Складские площади в Москве'} />
        </div>

        <SectionTitleCenter title={'преимущества работы с нами'} />
        <FactsGrid />
      </div>
    </section>
  )
}

export default Facts
