import TemplateDefault from "../../src/templates/Default"

import { Container, Typography, Box, TextField, Select, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    }
}))

const Publish = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            {/* PAGE'S TITLE */}
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" color="textPrimary">
                    Publish Announcement
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    The more details it has, the better!
                </Typography>
            </Container>
            {/* PRODUCT'S TITLE */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" align="center" color="textPrimary">
                        Title
                    </Typography>
                    <TextField 
                        variant="outlined"
                        label={`E.g.: New White Bicycle, 20" rims, less than 1 year usage, aluminium, 20lb`}
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Category
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={() => {}}
                        inputProps={{
                            name: "age"
                        }}
                    >
                        <option value="">Select...</option>
                        <option value={1}>Baby and Toddler</option>
                        <option value={2}>Agriculture</option>
                        <option value={3}>Fashion</option>
                        <option value={3}>Automobiles</option>
                        <option value={3}>Services</option>
                        <option value={3}>Leisure</option>
                        <option value={3}>Animals</option>
                        <option value={3}>Furniture, House and Garden</option>
                        <option value={3}>Real Estate</option>
                        <option value={3}>Equipments and Tools</option>
                        <option value={3}>Smartphones, Tablets and Gadgets</option>
                        <option value={3}>Sports</option>
                        <option value={3}>Techonolgy</option>
                        <option value={3}>Work</option>
                        <option value={3}>Others</option>
                    </Select>
                </Box>
            </Container>
            {/* PRODUCT'S IMAGES */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Images
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        The first picture is the cover image of your product
                    </Typography>
                </Box>
            </Container>
            {/* PRODUCT'S DESCRIPTION */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Description
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Remember: the more details, the better!
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>
            {/* SELLER'S CONTACTS */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Your Contacts
                    </Typography>
                    <TextField 
                        label="Name"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="Phone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Box>
            </Container>
            {/* SUBMIT BUTTON */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box align="right">
                    <Button variant="contained" color="primary">
                        PUBLISH
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish