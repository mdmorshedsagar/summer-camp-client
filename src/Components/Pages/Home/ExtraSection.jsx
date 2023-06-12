
import { GiCricketBat,GiBasketballJersey,GiAmericanFootballPlayer } from "react-icons/gi";
const ExtraSection = () => {
    return (
        <div className=" my-16">
            <div className="grid md:grid-cols-2 gap-4 items-center m-2 shadow-xl">
                <div className="bg-slate-200 shadow-xl">
                    <img className="p-2 rounded-xl" src="https://www.shutterstock.com/image-vector/illustration-children-enjoying-sports-day-600w-2266380491.jpg"/>

                </div>
                <div>
                    <h1 className="text-3xl text-orange-500 my-4">our benefits</h1>
                    <h1 className="text-5xl font-bold mb-4">WHY CHOOSE US</h1>
                    <p className="text-lg mb-4">I’ve tried other sports blogging sites but SportsBlog has the most features and the best community I’ve ever experienced.” - Ben Sundock</p>
                    <div className="grid md:grid-cols-3 gap-6 shadow-lg ">
                       <GiBasketballJersey className="w-full h-auto border-2"></GiBasketballJersey>
                        <GiCricketBat className="w-full h-auto border-2"></GiCricketBat>
                        <GiAmericanFootballPlayer className="w-full h-auto border-2"></GiAmericanFootballPlayer>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ExtraSection;