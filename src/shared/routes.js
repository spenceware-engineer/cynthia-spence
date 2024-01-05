import Home from '../Home'
import Resume from '../components/Resume'

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/links',
    element: <h1>LINKS</h1>
  },
  {
    path: '/contact',
    element: <h1>CONTACT</h1>
  },
  {
    path: '/about',
    element: <h1>ABOUT</h1>
  }
]