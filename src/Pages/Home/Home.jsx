import Banner from "./Banner";
import BrowserByCategory from "./BrowserByCategory";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowserByCategory></BrowserByCategory>
            <HotJobs></HotJobs>
        </div>
    ); 
};

export default Home;