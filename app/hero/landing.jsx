import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto min-h-[50rem] md:max-h-[50rem]">
      <div className="flex md:flex-row w-full flex-col text-center md:text-left md:justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold my-2">
            Custom <span className="text-red-800">Metal Fabrication</span>
            <br />
            Solutions That
            <br />
            Exceed Expectations
          </h1>
          <p className="text-xl my-2">
            Experience the finest craftsmanship and precision engineering
            <br /> in every project we undertake.
          </p>
          <button className="border p-2 rounded-lg bg-slate-500 text-white my-2">
            Discover
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <Image
            className="rounded-xl"
            src="/placeholder.jpeg"
            alt="placeholder"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
