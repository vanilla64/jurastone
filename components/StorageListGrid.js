import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"
import storageImg1 from "../public/gallery/storage/raboti.jpg"
import storageImg2 from "../public/gallery/storage/raboti1.jpg"
import storageImg3 from "../public/gallery/storage/raboti11.jpg"
import storageImg4 from "../public/gallery/storage/raboti111.jpg"
import storageImg5 from "../public/gallery/storage/raboti1111.jpg"
import storageImg6 from "../public/gallery/storage/raboti11111.jpg"
import storageImg7 from "../public/gallery/storage/raboti111111.jpg"
import storageImg8 from "../public/gallery/storage/raboti111111.jpg"
import storageImg9 from "../public/gallery/storage/raboti11111111.jpg"

function StorageListGrid(props) {
  return (
    <GalleryListGrid>
      <li>
        <Image src={storageImg1} />
      </li>
      <li>
        <Image src={storageImg2} />
      </li>
      <li>
        <Image src={storageImg3} />
      </li>

      <li>
        <Image src={storageImg4} />
      </li>
      <li>
        <Image src={storageImg5} />
      </li>
      <li>
        <Image src={storageImg6} />
      </li>

      <li>
        <Image src={storageImg7} />
      </li>
      <li>
        <Image src={storageImg8} />
      </li>
      <li>
        <Image src={storageImg9} />
      </li>
    </GalleryListGrid>
  )
}

export default StorageListGrid
