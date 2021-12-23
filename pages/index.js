import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Main.module.css'
import Header from "../components/Header"
import HeaderContent from "../components/HeaderContent"
import Catalog from "../components/Catalog"
import Certificates from "../components/Certificates"
import Work from "../components/Work"
import Gallery from "../components/Gallery"
import Advantage from "../components/Advantage"
import Facts from "../components/Facts"
import Contacts from "../components/Contacts"
import Footer from "../components/Footer"
import ContactUsPopup from "../components/ContactUsPopup"

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
  <div>
      <Head>
        <title>Юрский мрамор</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Юрский мрамор" />
        <meta name="keywords" content="Юрский мрамор" />

        {/*<script type="text/javascript" async=""*/}
        {/*        src="https://www.gstatic.com/recaptcha/releases/_7Co1fh8iT2hcjvquYJ_3zSP/recaptcha__ru.js"*/}
        {/*        crossOrigin="anonymous"*/}
        {/*        integrity="sha384-vogCcjR/EnUTM6iG2/qvSZKdJ+wlosQWdguYzkwW238P0kA1al1TqYLccredKakC">*/}

        {/*</script>*/}
        {/*<script type="text/javascript" async="" src="https://mc.yandex.ru/metrika/tag.js"></script>*/}
        {/*<noscript>*/}
        {/*  <div>*/}
        {/*    <img src="https://mc.yandex.ru/watch/50161363" style={{ position: 'absolute', 'left': -9999 }} alt="" />*/}
        {/*  </div>*/}
        {/*</noscript>*/}

        <link rel="icon" href="/favicon.ico" />

        <meta name="google-site-verification" content="dcpAxDa2YDwHQmcjSWdafIc0yc3N6EH_8TAJdGJi36A" />
        <meta name="yandex-verification" content="b63e68e4e112a783" />
        {/*<script id="rhlpscrtg" type="text/javascript" charSet="utf-8" async="async"*/}
        {/*        src="https://web.redhelper.ru/service/main.js?c=zakaz110">*/}

        {/*</script>*/}
        {/*<script charSet="utf8" async=""*/}
        {/*        src="https://web.redhelper.ru/container/main.js?version=3.1.539.1630063113454">*/}

        {/*</script>*/}
        {/*<script charSet="utf8"*/}
        {/*        src="https://web.redhelper.ru/nx/start?version=3.1.539.1630063113454&amp;c=zakaz110&amp;page=https%3A%2F%2Fjurastone.ru%2F&amp;vid=13103389152"*/}
        {/*        async="">*/}

        {/*</script>*/}
        {/*<script charSet="utf8" type="text/javascript"*/}
        {/*        src="https://web.redhelper.ru/connect/v2/main.js?version=3.1.539.1630063113454">*/}

        {/*</script>*/}

        {/*<script type="text/javascript" charSet="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery"*/}
        {/*        src="https://web.redhelper.ru/vendor/jquery-new.min.js">*/}

        {/*</script>*/}
        {/*<script type="text/javascript" charSet="utf-8" async="" data-requirecontext="_"*/}
        {/*        data-requiremodule="https://web.redhelper.ru/nx/presence/zakaz110?callback=rhLocal407532.define&amp;_=1637735812671&amp;page=https%3A%2F%2Fjurastone.ru%2F&amp;vid=13103389152"*/}
        {/*        src="https://web.redhelper.ru/nx/presence/zakaz110?callback=rhLocal407532.define&amp;_=1637735812671&amp;page=https%3A%2F%2Fjurastone.ru%2F&amp;vid=13103389152">*/}

        {/*</script>*/}
        {/*<script type="text/javascript" charSet="utf-8" async="" data-requirecontext="_" data-requiremodule="jquery"*/}
        {/*        src="https://web.redhelper.ru/vendor/jquery.min.js">*/}

        {/*</script>*/}
      </Head>

      <Header onMailClick={() => setIsPopupOpen(prev => !prev)} />

      <main id={'main'} className={styles.main}>
        <HeaderContent />
        <Catalog />
        <Certificates />
        <Work />
        <Gallery />
        <Advantage />
        <Facts />
        <Contacts />
      </main>

      <ContactUsPopup onOverlayClick={() => setIsPopupOpen(prev => !prev)} isOpen={isPopupOpen} />
      <Footer />
    </div>
  )
}
