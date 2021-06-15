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
                            tag: "Exciting",
                            name: "Gift an Online Experience this Father's Day",
                            img: "https://a0.muscache.com/im/pictures/6047e231-0eff-493f-9e1a-59a6cb7a7616.jpg?im_w=1680"
                        }
                    ]
                }
        },
        {
            name: "ExploreCities",
            content: {
                country_name: "Zimbabwe"
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
                    subtitle: "Unique activities with local experts—in person or online."
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
                title: "Do something special for Father’s Day",
            }
        },
    ]
  });
};
