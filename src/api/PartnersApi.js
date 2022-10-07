import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function usePartnersHook() {
    const [allPartnersData, setAllPartners] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "partners"]{
                    title,
                    heading,
                    text,
                    content[] -> {
                        alt,
                        image {
                            asset -> {
                                _id,
                                url,
                            }
                        }
                    }
                }`
            )
            .then((data) => setAllPartners(data))
            .catch(console.error);
    }, []);

    return allPartnersData;
}
