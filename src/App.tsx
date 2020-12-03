import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Routes, Route, Link } from "react-router-dom"

import SimpleList from "./components/simple-list"
import VirtualizedList from "./components/virtualized-list"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    nav: {
      display: "flex",
      width: "100%",
      gap: "1em",
    },
    list: {
      overflow: "auto",
      maxHeight: 600,
    },
  })
)

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link to="/">With Virtual</Link>
        <Link to="/without-virtual">Without Virtual</Link>
      </nav>
      <div className={classes.list}>
        <Routes>
          <Route path="/" element={<VirtualizedList />} />
          <Route path="/without-virtual" element={<SimpleList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
