import lineUrl from './assets/tiles/1line.png'
import scaleUrl from './assets/tiles/2scale.png'
import colourUrl from './assets/tiles/3colour.png'
import repetitionUrl from './assets/tiles/4repetition.png'
import negativespaceUrl from './assets/tiles/5negativespace.png'
import symmetryUrl from './assets/tiles/6symmetry.png'
import transparencyUrl from './assets/tiles/7transparency.png'
import textureUrl from './assets/tiles/8texture.png'
import balanceUrl from './assets/tiles/9balance.png'
import hierarchyUrl from './assets/tiles/10hierarchy.png'
import contrastUrl from './assets/tiles/11contrast.png'
import framingUrl from './assets/tiles/12framing.png'
import gridUrl from './assets/tiles/13grid.png'
import randomnessUrl from './assets/tiles/14randomness.png'
import directionUrl from './assets/tiles/15direction.png'
import movementUrl from './assets/tiles/16movement.png'
import depthUrl from './assets/tiles/17depth.png'
import typographyUrl from './assets/tiles/18typography.png'

const line = {
  'name':'line',
  'url':lineUrl,
  'text': 'Helps direct the eye <br> Creates emphasis <br> Gives a sense of movement' }
const scale = {
  'name':'scale',
  'url':scaleUrl,
  'text': 'Draws attention to and from certain elements <br> Creates emphasis/drama'  }
const colour = {
  'name':'colour',
  'url':colourUrl,
  'text': 'Create a strong palette <br> Use the right colour model: RGB or CMYK? <br> Consider colour theory'}
const repetition = {
  'name':'repetition',
  'url':repetitionUrl,
  'text':'Helps to tie lots of individual elements together'}
const negativespace = {
  'name':'negativespace',
  'url':negativespaceUrl,
  'text':'The space in between elements<br> Create clever images'}
const symmetry = {
  'name':'symmetry',
  'url':symmetryUrl,
  'text':'Creates a sense of harmony <br> The human eye is generally attracted to symmetry'}
const transparency = {
  'name':'transparency',
  'url':transparencyUrl,
  'text':'Helps element interaction <br> Can create movement <br> Use it intentionally'}
const texture = {
  'name':'texture',
  'url':textureUrl,
  'text':'Gives tactility and depth to designs <br> Use sparingly and intentionally'
}
const balance = {
  'name':'balance',
  'url':balanceUrl,
  'text':"Each element has a 'weight' <br> Adjust your design's balance via scale and composition"
}
const hierarchy = {
  'name':'hierarchy',
  'url': hierarchyUrl,
  'text':'Helps users navigate your design <br> Signals importance of elements <br> Use scale, line, colour, etc.'
}
const contrast = {
  'name':'contrast',
  'url': contrastUrl,
  'text':'Light vs. dark, thick vs. thin <br> Helps create emphasis <br> Makes designs "pop"'
}
const framing = {
  'name':'framing',
  'url': framingUrl,
  'text':'Helps highlight elements <br> Can be aesthetic or purposeful <br> Crop images in interesting ways'
}
const grid = {
  'name':'grid',
  'url': gridUrl,
  'text':'Helps align elements <br> One grid can be used in many different ways'
}
const randomness = {
  'name':'randomness',
  'url': randomnessUrl,
  'text':"Don't be afraid to break rules <br> Asymmetry and clutter can be effective visual tools"
}
const direction = {
  'name':'direction',
  'url': directionUrl,
  'text':"Gives viewer a 'path' to follow <br> Direct the eye in 'Z', 'L', and 'Y' shapes"
}
const movement = {
  'name':'movement',
  'url': movementUrl,
  'text':"Brings designs to life <br> Try blur effects, motion lines or waving effects"
}
const depth = {
  'name':'depth',
  'url': depthUrl,
  'text':"Create a sense of dimension by giving your design texture, shadow, and 3D effects"
}
const typography = {
  'name':'typography',
  'url':typographyUrl,
  'text':'Pick a distinct font palette that fits your design <br> Use wisely and carefully'
}


const tiles = [
  line,
  scale,
  colour,
  repetition,
  negativespace,
  symmetry,
  transparency,
  texture,
  balance,
  hierarchy,
  contrast,
  framing,
  grid,
  randomness,
  direction,
  movement,
  depth,
  typography,
]

export default tiles
