import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Certs from '../pages/Certs'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/certifications',
    element: <Certs />
  }
]