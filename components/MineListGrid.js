import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"
import mineImg1 from "../public/gallery/mine/1.jpg"
import mineImg3 from "../public/gallery/mine/3.jpg"

function MineListGrid() {
  return (
    <GalleryListGrid>
      <li>
        <Image src={mineImg1} />
      </li>
      <li>
        <Image src={mineImg3} />
      </li>
    </GalleryListGrid>
  )
}

export default MineListGrid
