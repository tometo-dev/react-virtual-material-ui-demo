import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Routes, Route } from "react-router-dom"

import SimpleList from "./components/simple-list"
import VirtualizedList from "./components/virtualized-list"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
