import { useContext } from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Header.css'
import { AppContext } from '../context/AppContext'

export const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <header className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>Platzi Conf Merch</Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <svg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd' transform='translate(2 4)'>
              <path d='m3 2.5h12.5l-1.5855549 5.54944226c-.2453152.85860311-1.0300872 1.45055774-1.9230479 1.45055774h-6.70131161c-1.01909844 0-1.87522688-.76627159-1.98776747-1.77913695l-.80231812-7.22086305h-2' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
              <g fill='currentColor'><circle cx='5' cy='12' r='1' />
                <circle cx='13' cy='12' r='1' />
              </g>
            </g>
          </svg>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </header>
  )
}
