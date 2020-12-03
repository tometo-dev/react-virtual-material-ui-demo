import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

import mockData from "../assets/mock-data.json"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "auto",
      maxHeight: 600,
    },
  })
)

export default function SimpleList() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <List>
          {mockData.data.map((md, index) => {
            return (
              <ListItem>
                <ListItemText primary={`${index}: ${md}`} />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}
