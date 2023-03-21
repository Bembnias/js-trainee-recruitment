// Dummy DB to present API interactions
import { v4 as uuidv4 } from 'uuid'

export const animals = [
  {
    id: uuidv4(),
    name: 'Polar Bear',
    description: 'Say hello to your new friend',
    highlightedWord: 'friend',
    imgUrl: '/polar-bear.png',
  },
  {
    id: uuidv4(),
    name: 'Cheetah',
    description: 'No petting before eating',
    highlightedWord: 'eating',
    imgUrl: '/cheetah.png',
  },
  {
    id: uuidv4(),
    name: 'Panda',
    description: 'Eating always with pleasure',
    highlightedWord: 'pleasure',
    imgUrl: '/panda.png',
  },
  {
    id: uuidv4(),
    name: 'Fox',
    description: 'Sometimes quite suspicious',
    highlightedWord: 'suspicious',
    imgUrl: '/fox.png',
  },
  {
    id: uuidv4(),
    name: 'Squirrel',
    description: 'Staying curious',
    highlightedWord: 'curious',
    imgUrl: '/squirrel.png',
  },
  {
    id: uuidv4(),
    name: 'Butterfly',
    description: 'Majestic every time of a day',
    highlightedWord: 'Majestic',
    imgUrl: '/butterfly.png',
  },
  {
    id: uuidv4(),
    name: 'Elephant',
    description: 'It makes a huge difference',
    highlightedWord: 'huge',
    imgUrl: '/elephant.png',
  },
]
