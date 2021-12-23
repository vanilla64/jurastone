import React from 'react'
import styles from '../styles/ContactUsPopup.module.css'
import ContactUsForm from "./ContactUsForm";

function ContactUsPopup({ isOpen, onOverlayClick }) {
  const classes = {
    section: isOpen
      ? `${styles.section} ${styles.section_active}`
      : styles.section
  }

  return (
    <section className={classes.section}>
      <div onClick={onOverlayClick} className={styles.overlay} />
      <div className={styles.formWrap}>
        <ContactUsForm />


        {/*<h4>Оставьте заявку на БЕСПЛАТНУЮ консультацию!</h4>*/}
        {/*<form>*/}
        {/*  <div>*/}
        {/*    <input type="text"/>*/}
        {/*    <input type="text"/>*/}
        {/*    <input type="text"/>*/}
        {/*  </div>*/}
        {/*  <textarea>*/}

        {/*  </textarea>*/}
        {/*</form>*/}
      </div>
    </section>
  )
}

export default ContactUsPopup
