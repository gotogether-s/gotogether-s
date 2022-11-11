import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, Backdrop } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { click } from '@store/sideBarStatusSlice'
import Feature from './Feature'
import style from './SideBar.module.scss'

const SideBar = () => {
  const sideBarOpen = useSelector((state) => {
    return state.sideBarStatus.sideBarOpen
  })
  const dispatch = useDispatch()

  return (
    <>
      <MenuIcon
        sx={{
          fontSize: 30,
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() => dispatch(click())}
      />
      <Drawer
        PaperProps={{
          sx: {
            width: '80%',
            position: 'absolute',
            height: '100%',
            border: '1px solid #ddd',
            // transition: 'none !important',
          },
        }}
        variant="persistent"
        anchor="left"
        transitionDuration={{ enter: 500, exit: 400 }}
        open={sideBarOpen}
      >
        <Feature />
      </Drawer>
      <Backdrop
        open={sideBarOpen}
        onClick={() => dispatch(click())}
        sx={{ position: 'absolute' }}
        transitionDuration={{ enter: 500, exit: 400 }}
      />
    </>
  )
}

export default SideBar
