import React from 'react'
import ListGrid from "./ListGrid"
import style from "../styles/TabFilter.module.css"
import Image from "next/image"
import ladderImg from '../public/gallery/ladder/Galala-Ladder-2.jpg'

function LadderListGrid() {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={ladderImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={ladderImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={ladderImg} />
      </li>
    </ListGrid>
  )
}

export default LadderListGrid
