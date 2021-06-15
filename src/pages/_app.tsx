import {Box, ChakraProvider} from "@chakra-ui/react"
import {AppProps} from "next/app"
import Head from "next/head"
import "@fontsource/lexend/latin.css"

import customTheme from "styles/customTheme"
import "styles/globals.css"
import Footer from "components/Footer/Footer"

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			<Box w={"100%"} h={"100%"} py={24}>
				<Component {...pageProps} />
			</Box>
			<Footer />
		</ChakraProvider>
	)
}

export default MyApp
