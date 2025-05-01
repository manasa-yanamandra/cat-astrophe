import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import Schedule from './components/Schedule.tsx'
import Rooms from './components/Rooms.tsx'
import RoomData from './components/RoomData.tsx'
import Cats from './components/Cats.tsx'
import CataData from './components/CataData.tsx'
import RoomsList from './components/RoomsList.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<RoomsList />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route path="/rooms/:id" element={<RoomData />} />
    <Route path="/cats" element={<Cats />} />
    <Route path="/cats/:id" element={<CataData />} />
  </Route>,
)
