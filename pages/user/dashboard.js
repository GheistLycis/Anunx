import TemplateDefault from "../../src/templates/Default"
import { makeStyles } from "@material-ui/core/styles"
import { 
  Container, 
  Typography, 
  Button, 
  Grid,
  Card, 
  CardMedia,
  CardContent, 
  CardActions
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },
  cardMedia: {
    paddingTop: "56%"
  },
  buttonAdd: {
    margin: "30px auto",
    display: "block"
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container className={classes.container} maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          My Announcements
        </Typography>
        <Button className={classes.buttonAdd} variant="contained" color="primary">
          New Announcement
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Image's Title"
              />
              <CardContent>
                <Typography component="h2" variante="h5">
                  Product's Name
                </Typography>
                <Typography>
                  Product's Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Image's Title"
              />
              <CardContent>
                <Typography component="h2" variante="h5">
                  Product's Name
                </Typography>
                <Typography>
                  Product's Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Image's Title"
              />
              <CardContent>
                <Typography component="h2" variante="h5">
                  Product's Name
                </Typography>
                <Typography>
                  Product's Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={"https://source.unsplash.com/random"}
                title="Image's Title"
              />
              <CardContent>
                <Typography component="h2" variante="h5">
                  Product's Name
                </Typography>
                <Typography>
                  Product's Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home
