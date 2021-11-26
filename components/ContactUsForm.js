import React, { useState } from 'react'
import styles from '../styles/Contacts.module.css'

function ContactUsForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues(prev => { return { ...prev, [name]: value, } })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then(res => {
        if (res.ok) {
          console.log('send')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={onSubmit}
        className={styles.form}>
        <h4 className={styles.formTitle}>
          Остались вопросы? Оставьте заявку на БЕСПЛАТНУЮ консультацию!
        </h4>
        <div className={styles.inputContainer}>
          <input
            onChange={onChange}
            className={styles.inputHalfLeft}
            type="text"
            name={'name'}
            value={formValues.name}
            placeholder={'Ваше имя'}
            minLength={2}/>
          <input
            onChange={onChange}
            className={styles.inputHalfRight}
            type="email"
            name={'email'}
            value={formValues.email}
            placeholder={'Ваш email'}/>
          <input
            onChange={onChange}
            className={styles.inputFull}
            type="phone"
            name={'phone'}
            value={formValues.phone}
            placeholder={'Ваш телефон'}/>
          <textarea
            onChange={onChange}
            className={styles.inputFull}
            type="text"
            name={'message'}
            value={formValues.message}
            placeholder={'Ваше сообщение'}/>
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
