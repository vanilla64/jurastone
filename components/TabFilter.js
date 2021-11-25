import React, { useState } from 'react'
import style from '../styles/TabFilter.module.css'

import FasadListGrid from "./FasadListGrid"
import FloorListGrid from "./FloorListGrid"
import WallListGrid from "./WallListGrid"
import LadderListGrid from "./LadderListGrid"
import FireplaceGridList from "./FireplaceGridList"
import SwimmingPoolListGrid from "./SwimmingPoolListGrid"
import PavingListGrid from "./PavingListGrid"

function TabFilter() {
  const [navActive, setNavActive] = useState({
    fasad: true,
    floor: false,
    wall: false,
    ladder: false,
    fireplace: false,
    swimmingPool: false,
    paving: false
  })

  const handleListItemClick = evt => {
    const { id } = evt.target

    const newNavActive = {}
    const keys = Object.keys(navActive)

    keys.forEach(k => newNavActive[k] = false)

    newNavActive[id] = true
    setNavActive(newNavActive)
  }

  return (
    <div className={style.gridWrap}>
      <div className={style.leftCol}>
        <ul className={style.list}>
          <li
            onClick={handleListItemClick}
            id={'fasad'}
            className={!navActive.fasad ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Фасады</li>
          <li
            onClick={handleListItemClick}
            id={'floor'}
            className={!navActive.floor ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Полы</li>
          <li
            onClick={handleListItemClick}
            id={'wall'}
            className={!navActive.wall ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Стены</li>
          <li
            onClick={handleListItemClick}
            id={'ladder'}
            className={!navActive.ladder ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Лестницы</li>
          <li onClick={handleListItemClick}
              id={'fireplace'}
              className={!navActive.fireplace ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Камины</li>
          <li onClick={handleListItemClick}
              id={'swimmingPool'}
              className={!navActive.swimmingPool ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Бассейны</li>
          <li onClick={handleListItemClick}
              id={'paving'}
              className={!navActive.paving ? `${style.listItem}` : `${style.listItem} ${style.listItem_active}`}>Мощение</li>
        </ul>
      </div>
      { navActive.fasad && <FasadListGrid /> }
      { navActive.floor && <FloorListGrid /> }
      { navActive.wall && <WallListGrid /> }
      { navActive.ladder && <LadderListGrid /> }
      { navActive.fireplace && <FireplaceGridList /> }
      { navActive.swimmingPool && <SwimmingPoolListGrid /> }
      { navActive.paving && <PavingListGrid /> }
    </div>
  )
}

export default TabFilter
