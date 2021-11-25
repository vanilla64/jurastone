import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"
import interiorPortfplioImg1 from "../public/gallery/portfolio/interior/1.jpg"
import interiorPortfplioImg2 from "../public/gallery/portfolio/interior/2.jpg"
import interiorPortfplioImg3 from "../public/gallery/portfolio/interior/3.jpg"
import interiorPortfplioImg4 from "../public/gallery/portfolio/interior/4.jpg"
import interiorPortfplioImg5 from "../public/gallery/portfolio/interior/5.jpg"
import interiorPortfplioImg6 from "../public/gallery/portfolio/interior/6.jpg"
import interiorPortfplioImg7 from "../public/gallery/portfolio/interior/7.jpg"
import interiorPortfplioImg8 from "../public/gallery/portfolio/interior/8.jpg"
import interiorPortfplioImg9 from "../public/gallery/portfolio/interior/9.jpg"
import interiorPortfplioImg10 from "../public/gallery/portfolio/interior/10.jpg"
import interiorPortfplioImg11 from "../public/gallery/portfolio/interior/11.jpg"

function InteriorPortfolioListGrid() {
  return (
    <GalleryListGrid>
      <li>
        <Image src={interiorPortfplioImg1} />
      </li>
      <li>
        <Image src={interiorPortfplioImg2} />
      </li>
      <li>
        <Image src={interiorPortfplioImg3} />
      </li>
      <li>
        <Image src={interiorPortfplioImg4} />
      </li>
      <li>
        <Image src={interiorPortfplioImg5} />
      </li>
      <li>
        <Image src={interiorPortfplioImg6} />
      </li>
      <li>
        <Image src={interiorPortfplioImg7} />
      </li>
      <li>
        <Image src={interiorPortfplioImg8} />
      </li>
      <li>
        <Image src={interiorPortfplioImg9} />
      </li>
      <li>
        <Image src={interiorPortfplioImg10} />
      </li>
      <li>
        <Image src={interiorPortfplioImg11} />
      </li>
    </GalleryListGrid>
  )
}

export default InteriorPortfolioListGrid
