import { SearchIcon } from "@chakra-ui/icons"
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export default function NavbarSearchBox() {
	return (
		<Box flex="1">
			<InputGroup>
				<InputLeftElement
				pointerEvents="none"
				children={<SearchIcon color="gray.300" />}
				/>
				<Input variant="flushed" name="q" type="text" autoComplete="off" placeholder="Search for events" />
			</InputGroup>
		</Box>
	)
}