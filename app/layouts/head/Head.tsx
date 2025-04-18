import React from "react";
import type { Route } from "../../+types/root";
import { Links, Meta } from "react-router";

export default function Head() {
    return (
        <head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
        </head>
    );
}  