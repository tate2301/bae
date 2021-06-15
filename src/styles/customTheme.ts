import {theme, extendTheme} from "@chakra-ui/react"

const customTheme = extendTheme({
	fonts: {
		...theme.fonts,
		body: "Roboto, sans-serif",
		heading: "Inter, sans-serif",
	},
	colors: {
		...theme.colors,
		/** Example */
		milk: "#f6f6f4",
	},
	components: {
		/** Example */
		Button: {
			baseStyle: {
		    	fontWeight: "medium",
				zIndex: 0,
		   },
		},
	},
})

export default customTheme
