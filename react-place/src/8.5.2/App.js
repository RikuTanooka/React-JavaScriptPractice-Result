import React, { useState } from "react";
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";

export default function App() {
    const [login, setLogin] = useState("moonhighway");
    const [repo, setRepo] = useState("learning-react");
    return (
        <>
            <GitHubUser login={login} />
            <UserRepositories
                login={login}
                selectedRepo={repo}
                onSelect={setRepo}
                />
                <RepositoryReadme login={login} repo={repo} />
        </>
    );
}