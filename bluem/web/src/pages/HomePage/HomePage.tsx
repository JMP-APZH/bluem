import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <p>
          My default route is named <code>calendar</code>, link to me with `
          <Link to={routes.calendar()}>Calendar</Link>`
      </p>
      <p>
        My default route is named <code>scheduler</code>, link to me with `
        <Link to={routes.scheduler()}>Scheduler</Link>`
      </p>
    </>
  )
}

export default HomePage
