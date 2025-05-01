import { Link } from 'react-router-dom'
import { useRooms } from '../hooks/use-rooms'
import LoadingIndicator from './LoadingIndicator'

function RoomsList() {
  const { isPending, isError, data } = useRooms()
  console.log(data)
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
      <h2>Rooms:</h2>
      <ul className="cards">
        {data?.rooms.map((room) => (
          <li key={room.id} className="card">
            <Link to={`/rooms/${room.id}`}>
              <div className="location">
                <span className="title">{room.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoomsList
