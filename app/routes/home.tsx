import React from "react";
import type { Route } from "../+types/root";
import Main from "../routes/Main";
import { BrowserRouter } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <BrowserRouter basename="/domain/react_router_lp_test/">
            <Main />
        </BrowserRouter>
    );
}