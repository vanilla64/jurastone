import React from 'react'
import GalleryListGrid from "./GalleryListGrid"
import Image from "next/image"

import fasadPortfplioImg1 from '../public/gallery/portfolio/fasad/1.jpg'
import fasadPortfplioImg2 from '../public/gallery/portfolio/fasad/2.jpg'
import fasadPortfplioImg3 from '../public/gallery/portfolio/fasad/3.jpg'
import fasadPortfplioImg4 from '../public/gallery/portfolio/fasad/4.jpg'
import fasadPortfplioImg5 from '../public/gallery/portfolio/fasad/5.jpg'
import fasadPortfplioImg6 from '../public/gallery/portfolio/fasad/6.jpg'
import fasadPortfplioImg7 from '../public/gallery/portfolio/fasad/7.jpg'
import fasadPortfplioImg8 from '../public/gallery/portfolio/fasad/8.jpg'
import fasadPortfplioImg9 from '../public/gallery/portfolio/fasad/9.jpg'
import fasadPortfplioImg10 from '../public/gallery/portfolio/fasad/10.jpg'
import fasadPortfplioImg11 from '../public/gallery/portfolio/fasad/11.jpg'

function FasadPortfolioListGrid() {
  return (
    <GalleryListGrid>
      <li>
        <Image src={fasadPortfplioImg1} />
      </li>
      <li>
        <Image src={fasadPortfplioImg2} />
      </li>
      <li>
        <Image src={fasadPortfplioImg3} />
      </li>
      <li>
        <Image src={fasadPortfplioImg4} />
      </li>
      <li>
        <Image src={fasadPortfplioImg5} />
      </li>
      <li>
        <Image src={fasadPortfplioImg6} />
      </li>
      <li>
        <Image src={fasadPortfplioImg7} />
      </li>
      <li>
        <Image src={fasadPortfplioImg8} />
      </li>
      <li>
        <Image src={fasadPortfplioImg9} />
      </li>
      <li>
        <Image src={fasadPortfplioImg10} />
      </li>
      <li>
        <Image src={fasadPortfplioImg11} />
      </li>
    </GalleryListGrid>
  )
}

export default FasadPortfolioListGrid
