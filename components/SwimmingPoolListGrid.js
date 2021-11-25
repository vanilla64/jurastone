import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import swimmingPoolImg from '../public/gallery/swimming-pool/swiming.jpg'

function SwimmingPoolListGrid() {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={swimmingPoolImg} />
      </li>
    </ListGrid>
  )
}

export default SwimmingPoolListGrid
