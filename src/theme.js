import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#ffffff"
        },
        tertiary: {
            main: "rgb(227, 220, 213)"
        },
        background: {
            default: "rgb(242, 244, 245)",
            white: "#ffffff"
        }
    }
})

export default theme