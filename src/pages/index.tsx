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
	return {
		props: {
			layout: [
				{
						name: "ExploreNiches",
						content: {
							boo: "baz"
						}
				},
				{
						name: "GreatestEventsBanner",
						content: {
							boo: "baz"
						}
				},
				{
					name: "ExploreCities",
					content: {
						country_name: "Zimbabwe"
					}
				},
				{
						name: "ExploreRandom",
						content: {
							boo: "baz"
						}
				},
				{
						name: "HostEventBanner",
						content: {
							boo: "baz"
						}
				},
			]
		}
	}
}

export default Home
