import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth'

export function NewRoom() {

  const { user } = useAuth()

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
          <form>
            <input
              type="text"
              placeholder="nome da sala"
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