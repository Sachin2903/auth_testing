"use client"

import axios from "axios"
import { useEffect } from "react"
const str1 = "wKCG5gAErBXv-FqdfaBsVk3AUMrkMRIFnrOkVpXNL3YDZb1WGIGcCUkZBFobZu0nXVu-s7LyeJG_RbNA0gQEA6HpcI-bf3IFqVT_lHdi-FclH1_962ARkFHu0tu-7ROb"
export default function Page({ params }: any) {
    useEffect(() => {
        fetchApi()
    }, [])

    async function fetchApi() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Authorization", "Basic d3VkaS1hcHA6Y291cnNlMTIz");

        const urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("authorization_code", "write");
        urlencoded.append("code", `${params.id}`);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow"
        };
        //@ts-ignore
        fetch("http://localhost:9091/oauth/token", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return (
        <main>
            <p>{`${str1 == params.id}`}</p>
            <p>-----  code --------</p>
            {params.id}
        </main>
    )
}