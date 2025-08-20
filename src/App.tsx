import { Box } from '@chakra-ui/react'
import ResourcesPage from './pages/ResourcesPage'
import TopNav from './components/layout/TopNav'

function App() {
	return (
		<Box minH="100dvh" w="100vw">
			<TopNav />
			<Box pt="76px" w="100vw" px={{ base: 4, md: 6 }}>
				<ResourcesPage />
			</Box>
		</Box>
	)
}

export default App
