import React, {useState} from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'emotion-theming'
import theme from './theme.js'
import { Box, Flex, Heading, Text, Link, Image, Button } from 'rebass'
import ReactTooltip from 'react-tooltip'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from '@emotion/styled'
import tiles from './tiles'
import content from './content'
import svgIn from './assets/in.svg'
import svgOut from './assets/out.svg'
import svgReset from './assets/reset.svg'

const StyledTooltip = styled(ReactTooltip)`
  color: ${props => props.theme.colors.muted}!important;
  background-color: ${props => props.theme.colors.text}!important;
  font-size: ${props => props.theme.fontSizes.tiny};
  font-family: ${props => props.theme.fonts.body};
  &.place-top:after {
    border-top-color: ${props => props.theme.colors.text}!important;
   }
  &.place-left:after {
    border-left-color: ${props => props.theme.colors.text}!important;
  }
  &.place-right:after {
    border-right-color: ${props => props.theme.colors.text}!important;
  }
  &.place-bottom:after {
    border-bottom-color: ${props => props.theme.colors.text}!important;
  }
`

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

const Viewer = ({list, setStates}) => {
  const [view, setView] = useState(null)
  const links = list.map( (x, i) =>
    <Link sx={{cursor:'pointer', mx:10, fontFamily:'body', fontWeight:'bold', color:'secondary'}} onClick={()=>{setView(x);setStates([])}}>{i}</Link>
  )
  return (
    <Flex
      sx={{
        flexDirection:'column',
        alignItems:'center',
        bg:'background',
        height:'100%',
        width:'100%',
        gridArea: '2 / 2 / 5 / 6',
      }}
    >
      <Flex sx={{
        flexDirection:'row',
        my:10,
      }}>
        {links}
      </Flex>
      {view && (
        <TransformWrapper
        options={{minScale:0.5}}
        defaultScale={0.75}
        doubleClick={{mode:'reset'}}
        zoomIn={{step:10}}
        zoomOut={{step:10}}
        wheel={{disabled:true}}
        pinch={{disabled:true}}
        >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Flex sx={{
              flexDirection:'row'
            }}>
              <Button sx={{
                cursor: 'pointer',
                border: 'none',
                bg: 'transparent',
                p: 1,
                m: 2,
              }} onClick={zoomIn}>
                <Image src={svgIn} sx={{width: 16, height:16}}/>
              </Button>
              <Button sx={{
                cursor: 'pointer',
                border: 'none',
                bg: 'transparent',
                p: 1,
                m: 2,
              }} onClick={zoomOut}>
                <Image src={svgOut} sx={{width: 16, height:16}}/>
              </Button>
              <Button sx={{
                cursor: 'pointer',
                border: 'none',
                bg: 'transparent',
                p: 1,
                m: 2,
              }} onClick={resetTransform}>
                <Image src={svgReset} sx={{width: 16, height:16}}/>
              </Button>
            </Flex>
            <TransformComponent>
              <Image
                src={view}
                alt="infographic"
                sx={{maxWidth:'100%', width:'100%', height:'100%'}}
                />
            </TransformComponent>
          </>
        )}
        </TransformWrapper>
      )}
      {!view && (
        <Flex sx={{flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
          <Heading sx={{fontSize:'small', textAlign:'center',lineHeight:'small', color:'text'}}>Choose a number to view the associated infographic. <br/> Use the + and - buttons to zoom. <br/> Click and drag to pan. <br/> Double-click to reset view.</Heading>
          <Text sx={{fontFamily:'body',fontSize:'tiny', lineHeight:'medium',color:'muted'}}>Text and graphics: <Link sx={{color:'secondary'}} href="https://www.canva.com/learn/design-elements-principles/">Mary Stribley | Canva</Link></Text>
        </Flex>
      )}
    </Flex>
  )
}


const App = () => {
  const [tileStates, setTileStates] = useState([])
    return (
      <ThemeProvider theme={theme}>
          <StyledTooltip
            id="main"
            type="dark"
            effect="solid"
            multiline={true}
          />
          <TileGrid list={tiles} states={tileStates} setStates={setTileStates}>
            <Viewer list={content} setStates={setTileStates}/>
          </TileGrid>
      </ThemeProvider>
    );
  }

export default App
