import Classes from "./Classes";
import ExtraSection from "./ExtraSection";
import PopularInstructor from "./PopularInstructor";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Classes></Classes>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;