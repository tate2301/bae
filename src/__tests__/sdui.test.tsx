import ExploreCities from "../components/Explore/ExploreCities"
import PageUI, { IComponentTree, resolveComponent, SDUIComponent } from "../lib/sdui"
import renderer from "react-test-renderer"
import React from "react"

it("imports a given component from its name", () => {
    expect(resolveComponent("ExploreCities")).toBe(ExploreCities)
})

it("renders a given component from its name", () => {
    const ThisComponent = resolveComponent("ExploreCities")
    const renderedComponent = renderer.create(
        <ThisComponent />,
    )
    let tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
})

it("renders a given component and its props from its name using destructuring", () => {
    const message = {
        name: "ExploreCities",
        content: {
            country_name: "Zimbabwe"
        }
    }

    const ThisComponent = resolveComponent(message.name)
    const renderedComponent = renderer.create(
        <ThisComponent {...message.content} />,
    )
    let tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();    
})

it("renders a given component and its props from its name using prop values", () => {
    const message = {
        name: "ExploreCities",
        content: {
            country_name: "Zimbabwe"
        }
    }

    const ThisComponent = resolveComponent(message.name)
    const renderedComponent = renderer.create(
        <ThisComponent country_name={message.content.country_name} />,
    )
    let tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();    
})

it("renders the PageUI using data provided", () => {
    const componentTree: IComponentTree = [
        {
            name: "ExploreCities",
        },
        {
            name: "ExploreNiches",
        },
        {
            name: "GreatestEventsBanner",
        },
        {
            name: "HostEventBanner",
        },
    ] 

    const renderedComponent = renderer.create(
        <PageUI component_tree={componentTree} />,
    )
    let tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot(); 
})

it("renders an SDUIComponent with props", () => {
    const data = {
        component_name: "EventCard",
        props: {
            title: "Living Room Hunter's Scavenger",
            price: 12.00,
            city_name: "Chinhoyi",
            tickets: 50,
            favorite: false,
            remaining_slots: 20,
            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
        }, 
    }
    

    const renderedComponent = renderer.create(
        <SDUIComponent {...data} />,
    )
    let tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot(); 
})