import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

export function Home() {

  const history = useHistory()
  const { user, sigInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await sigInWithGoogle()
    }

    history.push('/rooms/new')
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="logo google" />
            crie sua sala com google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="digite o codigo da sala"
            />
          </form>
          <Button type="submit">
            Entrar na sala
          </Button>
        </div>
      </main>
    </div>
  )
}