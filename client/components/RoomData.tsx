import { useParams } from 'react-router-dom'
import { useRoomsById } from '../hooks/use-rooms'
import LoadingIndicator from './LoadingIndicator'

function RoomData() {
  const id = Number(useParams().id)
  if (isNaN(id)) {
    throw new Error(`Route param "id" is missing or invalid`)
  }
  const { isPending, isError, data } = useRoomsById(id)

  if (isPending) {
    return (
      <>
        <LoadingIndicator />
      </>
    )
  }

  if (isError) {
    return <>Oops</>
  }

  return (
    <div>
      {' '}
      <ul className="cards">
        {data.pets.map((pet) => (
          <li key={pet.id} className="card">
            <div className="location">
              <span className="title">{pet.name}</span>
              <img className="cardImage" src={pet.image} alt="pet name" />
              <h3 className="description">{pet.fun_fact}</h3>
              <h4>{pet.age} years old</h4>
              <h4>{pet.breed}</h4>
            </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoomData
