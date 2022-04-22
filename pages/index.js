import { 
    Container, 
    Typography, 
    Paper,
    InputBase,
    IconButton,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

import TemplateDefault from "../src/templates/Default"

const useStyles = makeStyles(theme => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchBox: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 2),
        marginTop: 20
    },
    cardGrid: {
        
    },
    cardMedia: {
        paddingTop: "56%"
    },
}))

const Home = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            {/* SEARCH BOX */}
            <Container className={classes.searchContainer} maxWidth="md">
                <Typography component="h1" variant="h3" aling="center" color="textPrimary">
                    What are you looking for?
                </Typography>
                <Paper className={classes.searchBox}>
                    <InputBase fullWidth placeholder="Eg: white bike insurance 20 rims" />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>
            {/* CARDS' GRID */}
            <Container className={classes.cardGrid} maxWidth="md">
                <Typography component="h2" variant="h4" aling="center" color="textPrimary">
                    Popular
                </Typography>
                <br />
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
                            $00,00
                            </Typography>
                        </CardContent>
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
                            $00,00
                            </Typography>
                        </CardContent>
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
                            $00,00
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home