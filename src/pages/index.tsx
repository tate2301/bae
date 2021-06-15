import DefaultLayout from "../layouts/DefaultLayout"
import DefaultNavbar from "../components/Navbar/DefaultNavbar"
import PageUI, { IComponentTree } from "lib/sdui"

const Home = (props: {
	layout: IComponentTree
}) => {
	return (
		<>
			<DefaultNavbar/>
			<DefaultLayout title="Business Event Scheduling">
				<PageUI component_tree={props.layout} />
			</DefaultLayout>
		</>
	)
}

export const getServerSideProps = async (_ctx: any) => {
	const data = await fetch("http://localhost:3000/api/sdui/")
	const layout = await data.json()

	return {
		props: {
			...layout
		}
	}
}

export default Home
