import React from 'react';
import styles from '../styles/HeaderContent.module.css'

function HeaderContent(props) {
  return (
    <section className={styles.content}>
      <div className={'container'}>
        <div className={styles.highLightsWrap}>
          <h3 className={styles.higLight}>Добываем</h3>
          <h3 className={styles.higLight}>Обрабатываем</h3>
          <h3 className={styles.higLight}>Поставляем</h3>
          <h3 className={styles.higLight}>Монтируем</h3>
        </div>

        <h2 className={styles.title}>
          Натуральный юрский мрамор от производителя без посредников и переплат
        </h2>
        <p className={styles.subTitle}>
          Получите просчет стоимости за 5 минут!
        </p>

        <form className={styles.form}>
          <div className={styles.inputsWrap}>
            <input className={styles.input}
                   type="text"
                   id="name"
                   name="name"
                   placeholder="Ваше имя"/>
            <input className={styles.input}
                   type="email"
                   id="email"
                   name="email"
                   placeholder="Ваш email"/>
            <input className={styles.input}
                   type="phone"
                   id="phone"
                   name="phone"
                   placeholder="Ваш телефон"/>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Отправить</button>
          </div>
        </form>

        <p className={styles.text}>
          Нажимая на кнопку «ОТПРАВИТЬ», вы даете согласие на обработку персональных данных.
        </p>
      </div>
    </section>
  );
}

export default HeaderContent;
