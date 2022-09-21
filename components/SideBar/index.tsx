import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import Backdrop from '@mui/material/Backdrop'
import Feature from './Feature'
import style from './SideBar.module.scss'

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const clickSideBarMenu = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <>
      <MenuIcon sx={{ fontSize: 30 }} onClick={clickSideBarMenu} />
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
        onClick={clickSideBarMenu}
        sx={{ position: 'absolute' }}
      />
    </>
  )
}

export default SideBar
