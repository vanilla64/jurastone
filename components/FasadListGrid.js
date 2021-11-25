import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import img from "../public/gallery/fasad/IMG_3027.jpg"

function FasadListGrid(props) {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={img} />
      </li>
    </ListGrid>
  )
}

export default FasadListGrid
