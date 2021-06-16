import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({
    layout: [
        {
                name: "ExploreNiches",
                content: {
                    title: "Explore event categories",
                    data: [
                        {
                            tag: "Collection",
                            name: "Featured Collection: WanderLust",
                            tagline: "Travel from home with online experiences",
                            img: "https://a0.muscache.com/im/pictures/91780510-ca64-4fc4-a7e6-be7c8f7129d5.jpg?im_w=1680"
                        },
                        {
                            tag: "Online Event",
                            name: "The Dawn of The New Lockdown",
                            img: "https://a0.muscache.com/im/pictures/6047e231-0eff-493f-9e1a-59a6cb7a7616.jpg?im_w=1680"
                        },
                        {
                            tag: "Collection",
                            name: "Featured Collection: WanderLust",
                            tagline: "Travel from home with online experiences",
                            img: "https://a0.muscache.com/im/pictures/91780510-ca64-4fc4-a7e6-be7c8f7129d5.jpg?im_w=1680"
                        },
                        {
                            tag: "Exciting",
                            name: "Gift an Online Experience this Father's Day",
                            img: "https://a0.muscache.com/im/pictures/6047e231-0eff-493f-9e1a-59a6cb7a7616.jpg?im_w=1680"
                        },
                    ]
                }
        },
        {
            name: "ExploreCities",
            content: {
                country_name: "Zimbabwe",
                data: [
                    {
                        city_name: "Harare",
                        subtitle: "The Heart of Business"
                    },
                    {
                        city_name: "Gweru",
                        subtitle: "The City of Progress"
                    },
                    {
                        city_name: "Harare",
                        subtitle: "The Heart of Business"
                    },
                    {
                        city_name: "Gweru",
                        subtitle: "The City of Progress"
                    },
                    {
                        city_name: "Harare",
                        subtitle: "The Heart of Business"
                    },
                    {
                        city_name: "Gweru",
                        subtitle: "The City of Progress"
                    },
                    {
                        city_name: "Harare",
                        subtitle: "The Heart of Business"
                    },
                    {
                        city_name: "Gweru",
                        subtitle: "The City of Progress"
                    },
                    {
                        city_name: "Harare",
                        subtitle: "The Heart of Business"
                    },
                    {
                        city_name: "Gweru",
                        subtitle: "The City of Progress"
                    },
                ]
            }
        },
        {
            name: "GreatestEventsBanner",
            content: {
                boo: "baz"
            }
        },
        {
                name: "ExploreRandom",
                content: {
                    title: "Explore Random Events",
                    subtitle: "Unique activities with local experts—in person or online.",
                    data: [
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                        {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                    ]
                }
        },
        {
                name: "HostEventBanner",
                content: {
                    boo: "baz"
                }
        },
        {
            name: "ExploreRandom",
            content: {
                title: "Trending in entertainment",
                data: [
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                ]
            }
        },
        {
            name: "GridList",
            content: {
                config: {
                    columns: {
                        base: 1,
                        md: 2,
                        lg: 3,
                        xl: 4
                    },
                    spacing: 8
                },
                title: "Make plans this weekend",
                data: [
                    {
                        name: "EventCard",
                        props: {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                    },
                    {
                        name: "EventCard",
                        props: {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                    },
                    {
                        name: "EventCard",
                        props: {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                        },
                    },
                    {
                        name: "EventCard",
                        props: {
                            title: "Living Room Hunter's Scavenger",
                            price: 12.00,
                            city_name: "Chinhoyi",
                            tickets: 50,
                            favorite: false,
                            remaining_slots: 20,
                            img: "https://a0.muscache.com/im/pictures/af5a139e-8160-4c83-b7cf-3b2bf2b464ef.jpg?im_w=480"
                        },
                    },
                ]
            }
        },
        {
            name: "ExploreRandom",
            content: {
                title: "Starting in the next 6 hours",
                subtitle: "Bored and have free time? Hop on.",
                data: [
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                    {
                        title: "Living Room Hunter's Scavenger",
                        price: 12.00,
                        city_name: "Chinhoyi",
                        tickets: 50,
                        favorite: false,
                        remaining_slots: 20,
                        img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                    },
                ]
            }
        },

    ]
  });
};
