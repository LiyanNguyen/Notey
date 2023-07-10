import { useCallback, useState } from 'react'
import {  NoteModal } from '../components'
import NavbarContent from '../components/NavbarContent'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openModal = useCallback(() => setIsOpen(true), [])

  return (
    <>
      <NavbarContent openModal={openModal} />        
      <NoteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar