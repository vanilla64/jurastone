import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import fireplaceImg from '../public/gallery/fireplace/fireplace-1.jpg'

function FireplaceGridList(props) {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fireplaceImg} />
      </li>
    </ListGrid>
  )
}

export default FireplaceGridList
