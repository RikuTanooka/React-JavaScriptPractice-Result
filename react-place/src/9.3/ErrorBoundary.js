import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) return fallback({error});
    return children;
  }
}

export const BreakThings = () => {
    throw new Error ("We intentionally broke something");
}

export function ErrorScreen({ error }) {
    return (
        <div className="error">
            <h3>we are sorry... something went wrong</h3>
            <p>We cannnot process your request at this moment.</p>
            <p>ERROR: {error.message}</p>
        </div>
    );
}