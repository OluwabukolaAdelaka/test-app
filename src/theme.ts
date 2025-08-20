import { extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
		body: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
	},
	styles: {
		global: {
			body: {
				bg: 'white',
			},
		},
	},
})

export default theme 