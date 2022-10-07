import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function useServicesHook() {
    const [allServicesData, setAllServices] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "services"]{
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
            .then((data) => setAllServices(data))
            .catch(console.error);
    }, []);

    return allServicesData;
}
