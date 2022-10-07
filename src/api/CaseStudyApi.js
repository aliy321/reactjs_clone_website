import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useCaseStudyHook() {
    const [allCaseStudyData, setAllCaseStudy] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "casestudy"]{
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
            .then((data) => setAllCaseStudy(data))
            .catch(console.error);
    }, []);

    return allCaseStudyData;
}
