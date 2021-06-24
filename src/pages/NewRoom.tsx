import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { FormEvent, useState } from 'react'
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'

export function NewRoom() {

  const [newRoom, setNewRoom] = useState('')
  const {user} = useAuth()
  const history = useHistory()

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()
    console.log(newRoom);

    if(newRoom.trim() === '') return 
    
    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="nome da sala"
              onChange={ event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              criar sala
            </Button>
            <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
          </form>
        </div>
      </main>
    </div>
  )
}