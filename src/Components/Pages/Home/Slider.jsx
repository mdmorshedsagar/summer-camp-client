
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/img1.avif';
import img2 from '../../../assets/img2.avif';
import img3 from '../../../assets/img3.webp';
import img4 from '../../../assets/img4.webp';
import img5 from '../../../assets/img5.webp';
import img6 from '../../../assets/img6.webp';
const Slider = () => {
    const headline = <>
    <div className="absolute inset-0 bg-black opacity-30"></div>
       <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-orange-400 md:text-3xl font-bold mb-4">Student summer camp</p>
      <h1 className="text-white uppercase md:text-5xl font-bold mb-4 w-1/2 ">A Chance to provide formative experiences</h1>
      <button className="bg-orange-400 text-white font-bold  py-2 px-6 rounded text-2xl">Explore</button>
    </div>
    </>
    return (
        <div>
             <Carousel   showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={1000}
        transitionTime={100} >
            <div className="relative">
                <img className="w-full h-auto object-cover "  src={img1} />
                
                 {headline}
            </div>
            <div className="relative">
                <img className="w-full h-auto object-cover"   src={img2} />
                {headline}
            </div>
            <div className="relative">
                <img className="w-full h-auto object-cover"  src={img3} />
                {headline}
            </div>
            <div className="relative">
                <img className="w-full h-auto object-cover"  src={img4} />
                {headline}
            </div>
            <div className="relative">
                <img className="w-full h-auto object-cover"  src={img5} />
                 {headline}
            </div>
            <div className="relative">
                <img className="w-full h-auto object-cover"  src={img6} />
               {headline}
            </div>
        </Carousel>
        </div>
    );
};

export default Slider;