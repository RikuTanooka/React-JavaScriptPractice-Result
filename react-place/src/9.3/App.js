import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoder from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./ErrorBoundary";

const Main = lazy(() => import("./Main"));


export default function App() {
    const [agree, setAgree] = useState(false);

    if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />;

    return (
    <ErrorBoundary>
        <Suspense fallback={<ClimbingBoxLoder />}>
            <Main />
        </Suspense>
    </ErrorBoundary>
    );
}