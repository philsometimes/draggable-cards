import React, {useState} from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'emotion-theming'
import theme from './theme.js'
import { Box, Flex } from 'rebass'
import ReactTooltip from 'react-tooltip'
import tiles from './tiles'
import content from './content'

const TileGrid = ({list, states, setStates, children}) => {
  const mappedTiles = list.map( item =>
    <Box
      data-tip={item.text}
      data-for="main"
      data-iscapture="true"
      key={item.toString()}
      sx={{
        m:20,
        backgroundImage:`url(${item.url})`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        opacity: states.includes(item.name) ? 1 : 0.25,
        '&:hover': {
          opacity: 1
        }
      }}
      onClick={() => states.includes(item.name) ?
        setStates(states.filter(x => x != item.name)) :
        setStates(states.concat(item.name))
      }
    >
      <Box
        sx={{
          backgroundColor:'white',
          backgroundImage: 'radial-gradient(black 15%, transparent 16%), radial-gradient(black 15%, transparent 16%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 40px 40px',
          width:'100%',
          height:'100%',
          // pointerEvents:'none',
          mixBlendMode:'multiply',
          opacity: states.includes(item.name) ? 0 : 0.5,
          '&:hover': {
            opacity: 0
          }
        }}
      />
    </Box>
  )
  return (
    <Box
      sx={{
        display:'grid',
        bg:'background',
        height:'100%',
        width:'100%',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridAutoFlow: 'row',
      }}
    >
      {children}
      {mappedTiles}
    </Box>
  )
}

const Viewer = ({list, children}) => {
  const [view, setView] = useState(0)
  const links = list.map( x =>
    x
  )
  return (
    <Flex
      sx={{
        flexDirection:'column',
        bg:'background',
        height:'100%',
        width:'100%',
        gridArea: '2 / 2 / 5 / 6',
      }}
    >
      {children}
    </Flex>
  )
}

const App = () => {
  const [tileStates, setTileStates] = useState([])
    return (
      <ThemeProvider theme={theme}>
          <ReactTooltip
            id="main"
            type="dark"
            effect="solid"
            multiline={true}

          />
          <TileGrid list={tiles} states={tileStates} setStates={setTileStates}>
            <Viewer />
          </TileGrid>
      </ThemeProvider>
    );
  }

export default App
