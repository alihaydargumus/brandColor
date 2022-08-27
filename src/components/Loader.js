import ContentLoader from "react-content-loader";

function Loader(props) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={103}
            viewBox="0 0 400 103"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="20" y="49" rx="0" ry="0" width="70" height="40" />
            <rect x="10" y="10" rx="0" ry="0" width="52" height="6" />
            <rect x="113" y="49" rx="0" ry="0" width="70" height="40" />
            <rect x="203" y="50" rx="0" ry="0" width="70" height="40" />
        </ContentLoader>
    );
}

export default Loader;