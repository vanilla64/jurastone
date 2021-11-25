import React from 'react'
import styles from '../styles/Catalog.module.css'
import SectionTitle from "./SectionTitle"

import juraCream from '../public/cards/Jura-Cream-Gala-Cream.jpg'
import juraCreamHover from '../public/cards/Jura-Cream-Gala-Cream_1.jpg'

import juraCreamLight from '../public/cards/Jura-Cream-Light-Galala.jpg'
import juraCreamLightHover from '../public/cards/Jura-Cream-Light-Galala_1.jpg'

import juraRamwaysWF from '../public/cards/Jura-Ramways-White-Fantasy-300x200.jpg'
import juraRamwaysWFHover from '../public/cards/Jura-Ramways-White-Fantasy_1-300x200.jpg'

import juraGoldenFantasy from '../public/cards/Jura-Gold-Golden-Fantasy.jpg'
import juraGoldenFantasyHover from '../public/cards/Jura-Gold-Golden-Fantasy_1.jpg'

import juraRoyalTulipe from '../public/cards/Jura-Beige-Royal-Tulipe-Honey.jpg'
import juraRoyalTulipeHover from '../public/cards/Jura-Beige-Royal-Tulipe-Honey_1.jpg'

import juraZafranaBeige from '../public/cards/Jura-Beige-Light-Zafrana-Beige.jpg'
import juraZafranaBeigeHover from '../public/cards/Jura-Beige-Light-Zafrana-Beige_1.jpg'

import juraZafranaRose from '../public/cards/Jura-Rose-Zafrana-Rose.jpg'
import juraZafranaRoseHover from '../public/cards/Jura-Rose-Zafrana-Rose_1.jpg'

import juraSunnyRose from '../public/cards/Jura-Red-Sunny-Rose.jpg'
import juraSunnyRoseHover from '../public/cards/Jura-Red-Sunny-Rose1.jpg'

import juraRoyalTulipeGrey from '../public/cards/Jura-Blue-Royal-Tulipe-Greyp.jpg'
import juraRoyalTulipeGreyHover from '../public/cards/Jura-Blue-Royal-Tulipe-Grey_1.jpg'

import juraMeliGrey from '../public/cards/Jura-Grey-Meli-Grey.jpg'
import juraMeliGreyHover from '../public/cards/Jura-Grey-Meli-Grey_1.jpg'

import juraMeliGreyLight from '../public/cards/Jura-Grey-Light-Meli-Grey-Light.jpg'
import juraMeliGreyLightHover from '../public/cards/Jura-Grey-Light-Meli-Grey-Light_1.jpg'

import juraMeliGreyDark from '../public/cards/Jura-Grey-Dark-Meli-Grey-Dark.jpg'
import juraMeliGreyDarkHover from '../public/cards/Jura-Grey-Dark-Meli-Grey-Dark_1.jpg'

import Card from "./Card";
import Cards from "./Cards";

function Catalog(props) {
  return (
    <section id={'catalog'} className={styles.catalog}>
      <div className="container">
        <SectionTitle title={'Каталог юрского мрамора'} />

        <Cards>
          <Card
            img={juraCream}
            imgHover={juraCreamHover}
            title={'Jura Cream (Gala Cream)'}
            price={'4400 руб./кв.м'}
          />
          <Card
            img={juraCreamLight}
            imgHover={juraCreamLightHover}
            title={'Jura Cream Light (Galala)'}
            price={'4720 руб./кв.м'}
          />
          <Card
            img={juraRamwaysWF}
            imgHover={juraRamwaysWFHover}
            title={'Jura Рамвайс (White Fantasy)'}
            price={'5200 руб./кв.м'}
          />
          <Card
            img={juraGoldenFantasy}
            imgHover={juraGoldenFantasyHover}
            title={'Jura Gold (Golden Fantasy)'}
            price={'4560 руб./кв.м'}
          />

          <Card
            img={juraRoyalTulipe}
            imgHover={juraRoyalTulipeHover}
            title={'Jura Beige (Royal Tulipe Honey)'}
            price={'5040 руб./кв.м'}
          />
          <Card
            img={juraZafranaBeige}
            imgHover={juraZafranaBeigeHover}
            title={'Jura Beige Light (Zafrana Beige)'}
            price={'4800 руб./кв.м'}
          />
          <Card
            img={juraZafranaRose}
            imgHover={juraZafranaRoseHover}
            title={'Jura Rose (Zafrana Rose)'}
            price={'4720 руб./кв.м'}
          />
          <Card
            img={juraSunnyRose}
            imgHover={juraSunnyRoseHover}
            title={'Jura Red (Sunny Rose)'}
            price={'4560 руб./кв.м'}
          />

          <Card
            img={juraRoyalTulipeGrey}
            imgHover={juraRoyalTulipeGreyHover}
            title={'Jura Blue (Royal Tulipe Grey)'}
            price={'5040 руб./кв.м'}
          />
          <Card
            img={juraMeliGrey}
            imgHover={juraMeliGreyHover}
            title={'Jura Grey (Meli Grey)'}
            price={'5120 руб./кв.м'}
          />
          <Card
            img={juraMeliGreyLight}
            imgHover={juraMeliGreyLightHover}
            title={'Jura Grey Light (Meli Grey Light)'}
            price={'5120 руб./кв.м'}
          />
          <Card
            img={juraMeliGreyDark}
            imgHover={juraMeliGreyDarkHover}
            title={'Jura Grey Dark (Meli Grey Dark)'}
            price={'5200 руб./кв.м'}
          />
        </Cards>
      </div>
    </section>
  )
}

export default Catalog;
