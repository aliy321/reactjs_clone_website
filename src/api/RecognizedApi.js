import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useRecognizedHook() {
    const [allRecognizedData, setAllRecognized] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "recognized"]{
                    title,
                    heading,
                    text,
                    content[] -> {
                        title,
                        heading,
                        text,
                        image {
                            asset -> {
                                _id,
                                url
                            }
                        }
                    }
                }`
            )
            .then((data) => setAllRecognized(data))
            .catch(console.error);
    }, []);

    return allRecognizedData;
}
