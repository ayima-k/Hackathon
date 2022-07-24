import React from 'react'
import Card from '../Card/Card'
import { CardList } from '../Card/List'
import cls from './Filter.module.scss'

const Filter = () => {

  const [state, setState] = React.useState('')
  const [value, setValue] = React.useState('')
  const [data, setData] = React.useState(null)
  // const search = 

  const filterCard = CardList?.filter(item => {
    return item.name?.toLowerCase().includes(state.toLowerCase())
      || item.direction?.toLowerCase().includes(state.toLowerCase())
      || item.skills?.toLowerCase().includes(state.toLowerCase())
  })

  const handleValue = (value) => {
    setValue(value)
  }

  const searchClick = () => {
    const filterCard = CardList?.filter(item => {
      return item.name?.toLowerCase().includes(value.toLowerCase())
        || item.direction?.toLowerCase().includes(value.toLowerCase())
        || item.skills?.toLowerCase().includes(value.toLowerCase())
    })
    setData(filterCard)


  }

  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.search}>
          <input
            type="search"
            placeholder='Front-End'
            className={cls.searchInput}
            onChange={e => handleValue(e.target.value.trim())}
          />
          <button onClick={() => searchClick()}>Поиск</button>
        </div>
        {
          <Card filterCard={data ? data : filterCard} />
        }
      </div>
    </React.Fragment>
  )
}

export default Filter



