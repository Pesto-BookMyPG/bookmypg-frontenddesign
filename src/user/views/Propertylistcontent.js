import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Rating from "../LandingPage/rating";
import Bookproperty from "./schedulevisit";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "images/Hostel Images/test.jpg",
  },
  {
    label: "Second Picture",
    imgPath: "images/Hostel Images/test2.jpg",
  },
  {
    label: "Third Picture",
    imgPath: "images/Hostel Images/test3.jpg",
  },
  {
    label: "Fourth Picture",
    imgPath: "images/Hostel Images/test5.jpg",
  },
  {
    label: "Fifth Picture",
    imgPath: "images/Hostel Images/test6.jpg",
  },
];

const useStylesselect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    paddingTop: "100px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
    flexGrow: 1,
  },
  card: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  root: {
    display: "flex",
    padding: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    height: 150,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const cards = [1, 2, 3, 4];

export default function Album() {
  const classes = useStyles();

  const classesselect = useStylesselect();

  const [location, setLocation] = React.useState("");
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const maxSteps = MyCollection.length;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} spacing={1}>
            <Card className={classes.root}>
              <Box>
                <CardMedia
                  className={classes.cover}
                  image="images/Hostel Images/test.jpg"
                  title="Image title"
                />

                <Rating value={4} number={10} />
              </Box>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Zolo House 1
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    1 Private room in Studio for rent in Sion, Mumbai
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    ₹15,000/month
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "10px" }}
                    >
                      Schedule Visit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "10px" }}
                    >
                      More Details
                    </Button>
                  </Box>
                </Grid>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
