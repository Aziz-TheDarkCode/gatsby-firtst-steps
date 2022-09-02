import { Link } from 'gatsby'
import React from 'react'

function Header() {

  return (
    <header>
      {/* Header wrapper */}
      <section className='p-4 container mx-auto flex items-center justify-between'>
      <Link to='/' className='text-2xl'>Site's logo</Link>
      <nav className='flex items-center'>
        <Link to='/'>Home</Link>
        <Link to='/marketplace'>Marketplace</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about-us'>About us</Link>
      </nav>
      </section>

    </header>
  )
}

export default Header