import React from 'react'
import SectionTitle from "./SectionTitle"
import styles from '../styles/Advantage.module.css'
import AdvantageTextBlock from "./AdvantageTextBlock"
import AdvantageDropDown from "./AdvantageDropDown";

function Advantage() {
  return (
    <section className={styles.advantage}>
      <div className="container">
        <SectionTitle title={'Преимущества нашего юрского мрамора'} />
        <AdvantageTextBlock>
          <p className={styles.text}>
            Добывается нами из различных древних слоев Юрского периода на 4 карьерах в окрестностях Каира, поэтому
            обладает уникальной и неповторимой «живой» структурой камня и базовой палитрой 12-ти оттенков
            (светло-кремовый почти белый, желто-бежевый, розовый, голубовато-серый и темно-серый), проходит жесткую
            селекцию на производстве.  Вследствие своей многогранности и природного шарма наш юрский камень великолепно
            подходит, как для внешней отделки, так и для интерьеров.
          </p>
        </AdvantageTextBlock>

        <AdvantageTextBlock>
          <p className={styles.text}>Обладает повышенными для юрских известняков физико-механическими свойствами:</p>
          <p className={styles.text}>Морозостойкость F150 циклов и более</p>
          <p className={styles.text}>Плотность 2,6 - 2,7 т/м3</p>
          <p className={styles.text}>Водопоглощение менее 0,5%</p>
          <p className={styles.text}>Прочность на сжатие 91 – 112 МПа</p>
          <p className={styles.text}>Истираемость менее 0,4 г/см2</p>
          <p className={styles.text}>Сертифицирован по ГОСТ 9480-2012</p>
          <p className={styles.text}>
            Поэтому идеально подходит для применения в архитектуре и наружной облицовки навесных вентилируемых
            фасадов при более низкой цене, чем у Европейских аналогов за счет курсовой разницы Usd/Euro и очень
            высокой производительности нашего оборудования 50 000 м2/месяц.
          </p>
        </AdvantageTextBlock>

        <AdvantageTextBlock>
          <p className={styles.text}>
            Полное отсутствие радиоактивного фона у нашего юрского мраморизованного известняка, свойственного многим
            другим породам мрамора, травертина и гранита.
          </p>
        </AdvantageTextBlock>

        <AdvantageTextBlock>
          <p className={styles.text}>
            Благодаря различным видам обработки юрского камня на нашем производстве (шлифовка, полировка, антик,
            бучарда, пескоструй, скала), он приобретает множество видов неповторимой выразительной структуры и оттенков
            поверхности для изысканного вкуса дизайнера, архитектора, заказчика.
          </p>
        </AdvantageTextBlock>

        <AdvantageTextBlock>
          <p className={styles.text}>
            Поставляется в Россию в виде слэбов, плит для фасада, подоконников, ступеней, плитки, плит для стен
            и для пола, а также в виде плинтусов, откосов, наличников, балясин, колонн, барных стоек,
            а также любых самых сложных архитектурных элементов по эскизам заказчика.
          </p>
        </AdvantageTextBlock>

        <AdvantageTextBlock>
          <p className={styles.text}>
            Всегда имеется в наличии на складе в Москве в объеме от 1000 до 1500 м2 в ассортименте,
            а также поставляется нами контейнерами «под заказ» по специальным проектным ценам.
          </p>
        </AdvantageTextBlock>
        <AdvantageDropDown />
      </div>
    </section>
  )
}

export default Advantage
