import React from 'react'
import SectionTitleCenter from "./SectionTitleCenter"
import styles from '../styles/Contacts.module.css'
import ContactUsForm from "./ContactUsForm";

function Contacts() {
  return (
    <section >
      <SectionTitleCenter title={'Контакты'} />

      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.8216849768437!2d37.26864096213294!3d55.6778769823993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b550469f73ee43%3A0xaca0be40cdda1998!2sWestEast!5e0!3m2!1sru!2sru!4v1637760038984!5m2!1sru!2sru"
        allowFullScreen="" loading="lazy">

      </iframe>

      <div className={styles.wrapper}>
        <div className={styles.contactCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#9e6735"
               className={styles.icon} viewBox="0 0 16 16">
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
          </svg>

          <p className={styles.text}>
            Московская обл., г.Одинцово, ул.Маршала Неделина, д.6А (БЦ WestEast, 4 этаж)
          </p>
        </div>

        <div className={styles.contactCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#9e6735"
               className={styles.icon} viewBox="0 0 16 16">
            <path
              d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM1.807 4.734a.5.5 0 1 0-.884-.468A7.967 7.967 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A6.967 6.967 0 0 1 1 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A7.967 7.967 0 0 0 16 8a7.967 7.967 0 0 0-.923-3.734zM3.34 6.182a.5.5 0 1 0-.93-.364A5.986 5.986 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A4.986 4.986 0 0 1 3 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z"/>
          </svg>

          <p className={styles.text}>+7 (495) 132-74-00</p>
          <p className={styles.text}>+7 (925) 04-777-92</p>
        </div>

        <div className={styles.contactCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#9e6735" className={styles.icon}
               viewBox="0 0 16 16">
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <p className={styles.text}>zakaz@jurastone.ru</p>
        </div>
      </div>

      <ContactUsForm />
    </section>
  )
}

export default Contacts
