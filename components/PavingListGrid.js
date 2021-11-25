import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import pavingImg from '../public/gallery/paving/IMG_3028.jpg'

function PavingListGrid(props) {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={pavingImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={pavingImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={pavingImg} />
      </li>
    </ListGrid>
  )
}

export default PavingListGrid
