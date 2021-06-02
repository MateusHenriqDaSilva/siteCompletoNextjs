import './../styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

export default function MyApp({ Component, pageProps }) {
  <Router>
    <Switch>
      <Route basename="/site">
      </Route>
  </Switch>
</Router >

  return <Component {...pageProps} />
}