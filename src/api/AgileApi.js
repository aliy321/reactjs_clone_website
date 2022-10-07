import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useAgileHook() {
    const [allAgileData, setAllAgile] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "agile"]{
                    title,
                    heading,
                    text,
                    image {
                        asset -> {
                            _id,
                            url,
                        }
                    },
                    content[] -> {
                        title,
                        text,
                    },
                }`
            )
            .then((data) => setAllAgile(data))
            .catch(console.error);
    }, []);

    return allAgileData;
}
