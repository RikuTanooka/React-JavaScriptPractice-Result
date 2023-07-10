import SiteLayout from "./SiteLayout";
import ErrorBoundary, { BreakThings, ErrorScreen } from "./ErrorBoundary";

const Callout = ({ children }) => (
    <div className="callout">{children}</div>
  );

export default function App() {
    return (
        <SiteLayout menu={
                <p>Menu</p>
        }>
                <Callout>Callout</Callout>
                <h1>Contents</h1>
                <p>This is the main part of the example layout</p>
        </SiteLayout>
    );
}