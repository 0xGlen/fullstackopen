import React from 'react'

const Filter = ({newFilter, handleFilterChange, setShowAll}) => {

    const triggerFilter = (value) => {
        value === ''? setShowAll(true) : setShowAll(false)
      }

    return (
        <p>filter by name <input value={newFilter} onChange={e => {handleFilterChange(e); triggerFilter(newFilter)}} /></p>
    )
}

export default Filter