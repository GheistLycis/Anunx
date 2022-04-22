import { useState } from "react"
import { useDropzone } from "react-dropzone"

import { Container, 
    Typography, 
    Box, 
    TextField, 
    Select, 
    Button, 
    IconButton, 
    FormControl, 
    InputLabel, 
    OutlinedInput,
    InputAdornment
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { DeleteForever } from "@material-ui/icons"

import TemplateDefault from "../../src/templates/Default"

const useStyles = makeStyles(theme => ({
    mask: {},
    mainImage: {},
    container: {
        padding: theme.spacing(8, 0, 6)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    },
    thumbsContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: 15
    },
    dropzone: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 10,
        margin: "0 15px 15px 0",
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: "2px dashed black"
    },
    thumb: {
        position: "relative",
        width: 200,
        height: 150,
        margin: "0 15px 15px 0",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        "& $mainImage": {
            backgroundColor: "rgba(255, 250, 250, 0.6)",
            padding: "6px 10px",
            position: "absolute",
            bottom: 0,
            left: 0
        },

        "&:hover $mask": {
            display: "flex"
        },

        "& $mask": {
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: "100%",
            height: "100%"
        }
    }
}))

const Publish = () => {
    const [files, setFiles] = useState([])
    const classes = useStyles()
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {preview: URL.createObjectURL(file)})
            })
            setFiles([...files, ...newFiles])
        }
    })
    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

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
                        label={`Eg: New White Bicycle, 20" rims, less than 1 year usage, aluminium, 20lb`}
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
                    <Box className={classes.thumbsContainer}>
                        <Box className={classes.dropzone} {...getRootProps()}>
                            <Typography variant="body2" color="textPrimary">
                                Click to add image or drag and drop it in here
                            </Typography>
                            <input {...getInputProps()} />
                        </Box>
                        {/* To-do: dropped files are not appearing */}
                        {
                            files.map((file, index) => {
                                <Box 
                                    key={file.name}
                                    className={classes.thumb}
                                    style={{backgroundImage: `url(${file.preview}`}}
                                >
                                    {
                                        index === 0 ?
                                            <Box className={classes.mainImage}>
                                                <Typography variant="body2" color="secondary">
                                                    Main
                                                </Typography>
                                            </Box>
                                        : null
                                    }
                                    <Box className={classes.mask}>
                                        <IconButton 
                                            color="secondary" 
                                            onClick={() => handleRemoveFile(file.name)}
                                        >
                                            <DeleteForever fontSize="large" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            })
                        }
                    </Box>
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
            {/* PRODUCT'S PRICE */}
            <Container className={classes.boxContainer} maxWidth="md">
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Price
                    </Typography>
                    <br />
                    <FormControl 
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel>Value</InputLabel>
                        <OutlinedInput 
                            onChange={() => {}}
                            startAdornment={<InputAdornment position="start">US$</InputAdornment>}
                            labelWidth={40}
                        />
                    </FormControl>
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
                    {/* To-do: add a not-required 2nd phone option} */}
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