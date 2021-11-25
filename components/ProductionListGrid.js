import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"
import productionImg1 from '../public/gallery/production/pr.jpg'
import productionImg2 from '../public/gallery/production/pr2.jpg'
import productionImg3 from '../public/gallery/production/pr3.jpg'
import productionImg4 from '../public/gallery/production/pr4.jpg'
import productionImg5 from '../public/gallery/production/pr5.jpg'
import productionImg6 from '../public/gallery/production/pr6.jpg'
import productionImg7 from '../public/gallery/production/pr7.jpg'
import productionImg8 from '../public/gallery/production/pr8.jpg'
import productionImg9 from '../public/gallery/production/pr9.jpg'

function ProductionListGrid() {
  return (
    <GalleryListGrid>
      <li>
        <Image src={productionImg1} />
      </li>
      <li>
        <Image src={productionImg2} />
      </li>
      <li>
        <Image src={productionImg3} />
      </li>
      <li>
        <Image src={productionImg4} />
      </li>
      <li>
        <Image src={productionImg5} />
      </li>
      <li>
        <Image src={productionImg6} />
      </li>
      <li>
        <Image src={productionImg7} />
      </li>
      <li>
        <Image src={productionImg8} />
      </li>
      <li>
        <Image src={productionImg9} />
      </li>
    </GalleryListGrid>
  )
}

export default ProductionListGrid
