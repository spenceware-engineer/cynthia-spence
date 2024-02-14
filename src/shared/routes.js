import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Certs from '../pages/Certs'
import SingleCert from '../pages/SingleCert'

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
    path: '/awards',
    element: <Certs />
  },
  {
    path: '/awards/:id',
    element: <SingleCert />
  },
]
