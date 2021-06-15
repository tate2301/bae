import DefaultLayout from "../../layouts/DefaultLayout"
import {Box, Button, Flex, HStack, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Text} from "@chakra-ui/react"
import Logo from "../Branding/Logo"
import NavbarSearchBox from "components/Search/NavbarSearchBox"
import Link from "next/link"

export default function DefaultNavbar() {
	return (
		<Box backgroundColor="milk" py={2} className="navbar" zIndex={50}>
			<DefaultLayout>
				<Flex w="100%" justifyContent="space-between">
					<HStack w={"50%"} spacing={4}>
						<Logo />
						<NavbarSearchBox />
					</HStack>
					<HStack spacing={8}>
						<Box py={2}>
							<Button variant="unstyled" py={2}>Help</Button>
						</Box>
						<Box py={2}>
							<Button variant="unstyled" py={2}>Create event</Button>
						</Box>
						<Box py={2}>
							<Link href={"/auth"}>
								<a>
									<Button variant="styled" py={2} color="purple">
										Sign in
									</Button>
								</a>
							</Link>
						</Box>
					</HStack>
				</Flex>
			</DefaultLayout>
		</Box>
	)
}