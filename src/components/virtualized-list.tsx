import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { useVirtual } from "react-virtual"

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
  const parentRef = React.useRef<any>()

  const rowVirtualizer = useVirtual({
    size: mockData.data.length,
    parentRef,
    estimateSize: React.useCallback(() => 50, []),
  })

  return (
    <div>
      <div className={classes.root} ref={parentRef}>
        <List
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: "80rem",
            position: "relative",
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => {
            return (
              <ListItem
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <ListItemText
                  primary={`${virtualRow.index}: ${
                    mockData.data[virtualRow.index]
                  }`}
                />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}
