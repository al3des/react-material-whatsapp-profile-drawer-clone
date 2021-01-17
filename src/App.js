import React from "react";
import "./styles.css";

import {
  Grid,
  Drawer,
  Divider,
  IconButton,
  Typography,
  Input,
  InputLabel,
  InputAdornment,
  Zoom,
  Grow,
  Slide,
  makeStyles
} from "@material-ui/core";
import UpdateIcon from "@material-ui/icons/Update";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";

import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import teal from "@material-ui/core/colors/teal";

let useStyles = makeStyles({
  root: {
    background: blueGrey[900],
    color: blueGrey[50]
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
    // alignContent: "flex-end",
    background: grey[800],
    color: grey[50],
    minHeight: "150px",
    padding: "1em"
  },
  profilePictureGrid: {
    margin: "auto"
  },
  profilePicture: {
    borderRadius: "100%"
  },
  label: {
    color: teal[500]
  }
});

export default function App() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen((s) => !s);
  };
  let avatarName = Math.floor(Math.random() * 100);

  return (
    <div className="App">
      <Drawer
        open={open}
        onClose={(e) => toggleDrawer(e)}
        PaperProps={{ classes: { root: classes.root } }}
      >
        <Grid container>
          <Grid item conainer className={classes.header} xs={12}>
            <Grid container alignItems="center">
              <IconButton color="inherit" onClick={(e) => toggleDrawer(e)}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6">Profile</Typography>
            </Grid>
          </Grid>
          <Grid container item direction="column">
            <Grid item className={classes.profilePictureGrid}>
              <Zoom
                in={open}
                mountOnEnter
                unmountOnExit
                style={{ transitionDelay: "250ms" }}
              >
                <img
                  src={`https://avatars.dicebear.com/4.5/api/human/:${avatarName}.svg?w=300`}
                  alt=""
                  className={classes.profilePicture}
                />
              </Zoom>
            </Grid>
            <Grow
              in={open}
              mountOnEnter
              unmountOnExit
              style={{
                transitionDelay: "300ms",
                transformOrigin: "50 50 0"
              }}
              {...(open ? { timeout: 1000 } : {})}
            >
              <Grid container item direction="column" justify="space-between">
                <Grid item xs={12}>
                  <InputLabel className={classes.label}>Your Name</InputLabel>
                  <Input
                    color="inherit"
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <EditIcon />
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Divider flexItem />
                <Grid item xs={12}>
                  <InputLabel className={classes.label}>About</InputLabel>
                  <Input
                    color="inherit"
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <EditIcon />
                      </InputAdornment>
                    }
                  />
                </Grid>
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </Drawer>

      {/*Controls*/}
      <Grid container maxWidth="30%">
        <Grid item xs={8}>
          <IconButton>
            <img
              src={`https://avatars.dicebear.com/4.5/api/human/:${avatarName}.svg?r=50&w=300`}
              alt=""
              onClick={(e) => toggleDrawer(e)}
            />
          </IconButton>
        </Grid>
        <Grid item container xs={4}>
          <IconButton>
            <UpdateIcon />
          </IconButton>{" "}
          <IconButton>
            <ChatIcon />
          </IconButton>{" "}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
