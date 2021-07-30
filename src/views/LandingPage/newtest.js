import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Grid from "@material-ui/core/Grid";
//import GridItem from "@material-ui/core/GridItem";
//import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "@material-ui/core/Button";
import CustomInput from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { createTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

//import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

//const useStyles = makeStyles(styles);

const data = [
  {
    id: 1,
    name: "abc",
    rating: 4,
  },
  {
    id: 2,
    name: "abc",
    rating: 4,
  },
  {
    id: 3,
    name: "abc",
    rating: 4,
  },
  {
    id: 4,
    name: "abc",
    rating: 4,
  },
  {
    id: 5,
    name: "abc",
    rating: 4,
  },
];

const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const newtheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#212121",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#616161",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});

const useStylesgrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    textAlign: "-webkit-center",
  },

  paper: {
    height: 140,
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStyles = makeStyles({
  section: {
    //padding: "70px 0",
  },
  title: {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  spacin: {
    marginRight: "50px",
    marginLeft: "25px",
    marginTop: "15px",
    marginBottom: "15px",
    padding: "70px 30px",
  },
});

const useStylesnew = makeStyles({
  root: {
    minWidth: 250,
    width: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WorkSection() {
  const classes = useStyles();
  const classesgrid = useStylesgrid();
  const classesselect = useStylesselect();
  const classes1 = useStylesnew();
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div className={classes.section}>
      <MuiThemeProvider theme={newtheme}>
        <Grid justify="center">
          <Grid item xs={12}>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classesgrid.title}>
                  BookMyPG
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Contact Us</Button>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item cs={12} sm={12}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <Grid>
                <Grid item cs={12} sm={12} className={classes.spacin}>
                  <FormControl
                    variant="outlined"
                    className={classesselect.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Location
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={location}
                      onChange={handleChange}
                      label="Location"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container xs={12} spacing={1} className={classes.spacin}>
                  {data.map((d) => (
                    <Grid
                      item
                      xs
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      item
                    >
                      <Card className={classes1.root}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="images/Hostel Images/test.jpg"
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {d.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {d.rating}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button size="small" color="primary">
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <div style={{ width: "100%" }}>
                  <Box display="flex" flexDirection="row" bgcolor="grey.300">
                    <Box p={1} bgcolor="secondary">
                      <Typography variant="body2" component="p">
                        This platform is to facilitate both a property owner to
                        share his property details and Paying Guest to find
                        suitable property with one-click hassle-free payments.
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <Typography variant="subtitle1" component="p">
                        Contact Us:
                      </Typography>
                      <Typography variant="body2" component="p">
                        Email: abc@gmail.com
                      </Typography>
                      <Typography variant="body2" component="p">
                        Phone: +911234567890
                      </Typography>
                      <Typography variant="body2" component="p">
                        Contact us via email to register as PG-Owner. share his
                        property details and Paying Guest to find suitable
                        property with one-click hassle-free payments.
                      </Typography>
                    </Box>
                  </Box>
                  <Box textAlign="center" bgcolor="grey.300">
                    <Typography variant="body2" component="p">
                      All rights reserved @2021
                    </Typography>
                  </Box>
                </div>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
