import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useResourcesHook() {
    const [allResourcesData, setAllResources] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "resources"]{
                    title,
                    heading,
                    text,
                    content[] -> {
                        title,
                        slug,
                        shortDescription,
                        description,
                        image {
                            asset -> {
                                _id,
                                url,
                            }
                        }
                    },
                    digitalMarketing,
                    digitalMarketingContent,
                    digitalMarketingImage {
                        asset -> {
                            _id,
                            url,
                        }
                    },
                    digitalMarketingLink,
                    digitalMarketingLinkText,
                }`
            )
            .then((data) => setAllResources(data))
            .catch(console.error);
    }, []);

    return allResourcesData;
}
