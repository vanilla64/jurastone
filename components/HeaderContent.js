import React, { useState } from 'react'
import styles from '../styles/HeaderContent.module.css'

function HeaderContent() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues(prev => { return { ...prev, [name]: value, } })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    fetch('/api/request-price', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then(res => {
        console.log('send')
      }).catch(err => console.log(err))

    setFormValues({
      name: '',
      email: '',
      phone: '',
    })

  }

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

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputsWrap}>
            <input className={styles.input}
                   type="text"
                   id="name"
                   name="name"
                   onChange={onChange}
                   value={formValues.name}
                   placeholder="Ваше имя" required={true}/>
            <input className={styles.input}
                   type="email"
                   id="email"
                   name="email"
                   onChange={onChange}
                   value={formValues.email}
                   placeholder="Ваш email" required={true}/>
            <input className={styles.input}
                   type="phone"
                   id="phone"
                   name="phone"
                   onChange={onChange}
                   value={formValues.phone}
                   placeholder="Ваш телефон" required={true}/>
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
