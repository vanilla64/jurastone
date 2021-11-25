import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"
import style from '../styles/Gallery.module.css'
import FasadPortfolioListGrid from "./FasadPortfolioListGrid";
import GridTitle from "./GridTitle";
import InteriorPortfolioListGrid from "./InteriorPortfolioListGrid";

function PortfolioListWrap() {
  return (
    <div className={style.listWrap}>
      <div className={style.column}>
        <GridTitle title={'Фасады'} />
        <FasadPortfolioListGrid />
      </div>
      <div className={style.column}>
        <GridTitle title={'Интерьеры'} />
        <InteriorPortfolioListGrid />
      </div>
    </div>
  )
}

export default PortfolioListWrap
