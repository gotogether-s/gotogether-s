import MenuIcon from '@mui/icons-material/Menu'
import { Backdrop, Drawer } from '@mui/material'
import { click } from '@store/sideBarStatusSlice'
import { useDispatch, useSelector } from 'react-redux'
import Feature from './Feature'

const SideBar = () => {
  const dispatch = useDispatch()

  const sideBarOpen = useSelector((state) => {
    return state.sideBarStatus.sideBarOpen
  })

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
            borderLeft: '1px solid #ddd',
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
        sx={{ position: 'absolute', zIndex: 3 }}
        transitionDuration={{ enter: 500, exit: 400 }}
      />
    </>
  )
}

export default SideBar
