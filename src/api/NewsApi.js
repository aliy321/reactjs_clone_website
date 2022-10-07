import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useNewsHook() {
    const [allNewsData, setAllNews] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "news"]{
                    title,
                    heading,
                    text,
                    buttonText,
                    buttonLink,
                    calendarImage {
                        asset -> {
                            _id,
                            url
                        }
                    },
                    image {
                        asset -> {
                            _id,
                            url
                        }
                    }
                }`
            )
            .then((data) => setAllNews(data))
            .catch(console.error);
    }, []);

    return allNewsData;
}
