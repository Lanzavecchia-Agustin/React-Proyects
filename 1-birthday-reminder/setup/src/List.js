import React, { useState } from 'react'
import data from './data'

const List = () => {
  //Vars setUp
  const [people1, setPeople1] = useState(data)
  const [cargar, setCargar] = useState('Clear Birthdays')

  //Eliminar todos los items
  const clearItems = () => {
    if (people1 === data) {
      setPeople1([])
      setCargar('Load deleted Birthdays')
    } else {
      setPeople1(data)
      setCargar('Clear Birthdays')
    }
  }
  //Remover un item seleccionando su id
  const removeItem = (id) => {
    let newPeople = people1.filter((person) => person.id !== id)
    setPeople1(newPeople)
    //Cambiamos el estado del boton
    if (people1.length - 1 < people1.length) {
      setCargar('Load deleted Birthdays')
    } else {
      setCargar('Clear Birthdays')
    }
  }

  return (
    <>
      <>
        <h3> Birthdays today: {people1.length}</h3>
      </>
      {people1.map((person) => {
        const { id, name, age, image } = person

        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => removeItem(id)}>Remove</button>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, at ipsam necessitatibus.
            </p>
          </article>
        )
      })}
      <>
        <button onClick={() => clearItems()}>{cargar}</button>
      </>
    </>
  )
}

export default List
