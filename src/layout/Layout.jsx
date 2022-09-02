import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children,pageTitle}) {
  return (
    <>
        <Header/>
        <main className='container mx-auto p-4'>
            <h1 className="text-xl capitalize">{pageTitle}</h1>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout