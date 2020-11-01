import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'emotion-theming'
import theme from './theme.js'
import { Box, Flex } from 'rebass'
import Draggable from 'react-draggable'

const Outergrid = ({children}) => {
  return (
    <Box
      sx={{
        display:'grid',
        bg:'background',
        height:'100%',
        width:'100%',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
      }}
    >
      {children}
    </Box>
  )
}

const Innergrid = ({children}) => {
  return (
    <Box
      sx={{
        display:'grid',
        bg:'red',
        height:'100%',
        width:'100%',
        gridArea: '2 / 2 / 6 / 6'
      }}
    >
      {children}
    </Box>
  )
}

const App = () => {
    return (
      <ThemeProvider theme={theme}>
          <Outergrid>
            <Innergrid />
          </Outergrid>
      </ThemeProvider>
    );
  }

export default App
