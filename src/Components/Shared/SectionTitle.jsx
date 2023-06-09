// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h1 className="text-yellow-500 text-3xl uppercase mb-2 font-bold">{heading}</h1>
            <p className=" border-b-4 py-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;

