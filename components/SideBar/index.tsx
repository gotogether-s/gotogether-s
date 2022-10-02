import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, Backdrop } from '@mui/material'
import { useState } from 'react'
import Feature from './Feature'
import style from './SideBar.module.scss'

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <>
      <MenuIcon sx={{ fontSize: 30 }} onClick={toggleSideBar} />
      <Drawer
        PaperProps={{
          sx: {
            width: '80%',
            position: 'absolute',
            height: '100%',
            border: '1px solid #ddd',
            transition: 'none !important',
          },
        }}
        variant="persistent"
        anchor="left"
        open={sideBarOpen}
      >
        <Feature />
      </Drawer>
      <Backdrop
        open={sideBarOpen}
        onClick={toggleSideBar}
        sx={{ position: 'absolute' }}
      />
    </>
  )
}

export default SideBar
