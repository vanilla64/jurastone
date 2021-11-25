import React from 'react'
import ListGrid from "./ListGrid"
import Image from "next/image"
import fasadImg from '../public/gallery/floor/white-fantasy4.jpg'
import style from "../styles/TabFilter.module.css"

function FloorListGrid(props) {
  return (
    <ListGrid>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fasadImg} />
      </li>
      <li className={style.galleryListItem}>
        <Image className={style.galleryImg} src={fasadImg} />
      </li>
    </ListGrid>
  )
}

export default FloorListGrid
