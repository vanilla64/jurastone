import React from 'react'
import SectionTitle from "./SectionTitle"
import TabFilter from "./TabFilter"

function Work(props) {
  return (
    <section id={'work'}>
      <div className="container">
        <SectionTitle title={'Примеры применения юрского мрамора'} />
        <TabFilter />
      </div>
    </section>
  )
}

export default Work
