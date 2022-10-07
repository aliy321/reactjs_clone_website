import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useHeroHook() {
  const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "hero"]{
                    title,
                    heading,
                    text,
                    buttonLink,
                    buttonText,
                    imageSmall{
                        asset -> {
                            _id,
                            url
                        }
                    },
                    imageBig {
                        asset -> {
                            _id,
                            url
                        }
                    }
                }`
            )
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, []);

    return allPostsData;
}
