import ContentLoader from "react-content-loader";


const Loader = () => {
    return (
    <ContentLoader
        speed={2}
        width={700}
        height={300}
        viewBox="0 0 700 300"
        backgroundColor="#f3e7e7"
        foregroundColor="#c7cdea"
      >
        {/* Define your loader elements here */}
      </ContentLoader>
      )
};

export default Loader;