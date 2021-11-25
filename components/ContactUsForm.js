import React from 'react'
import styles from '../styles/Contacts.module.css'

function ContactUsForm() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h4 className={styles.formTitle}>
          Остались вопросы? Оставьте заявку на БЕСПЛАТНУЮ консультацию!
        </h4>
        <div className={styles.inputContainer}>
          <input className={styles.inputHalfLeft} type="text" placeholder={'Ваше имя'} minLength={2}/>
          <input className={styles.inputHalfRight} type="email" placeholder={'Ваш email'}/>
          <input className={styles.inputFull} type="phone" placeholder={'Ваш телефон'}/>
          <textarea className={styles.inputFull} type="text" placeholder={'Ваше сообщение'}/>
          <div className={styles.buttonContainer}>
            <button className={styles.button} type={'submit'}>Отправить</button>
          </div>
          <h6 className={styles.agreement}>
            Нажимая на кнопку «ОТПРАВИТЬ», вы даете согласие на обработку персональных данных.
          </h6>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm
