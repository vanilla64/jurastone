import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import wallImg from "../public/gallery/wall/shower_Golden-Fantasy.jpg"

function WallListGrid() {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={wallImg} alt="Картинка" />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={wallImg} alt="Картинка" />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={wallImg} alt="Картинка" />
      </li>
    </ListGrid>
  )
}

export default WallListGrid
