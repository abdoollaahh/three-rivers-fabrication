import Footer from '../components/Footer/footer';
import Nav from '../components/Navigation/nav';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col max-w-screen-xl mx-auto">
        <h1 className="text-8xl text-center md:text-left md:text-[12rem] text-slate-300 font-semibold my-2">
          ABOUT
        </h1>
        <div className="flex md:flex-row w-full flex-col text-center md:text-left md:justify-between my-10">
          <div className="basis-1/2">
            <h1 className="text-4xl font-medium">Our Work</h1>
            <p className="text-xl my-2">
              Welcome to Three Rivers Fabrication, where precision meets passion
              in every piece of metalwork. Established with a commitment to
              excellence, we specialize in crafting customized metal solutions
              for a variety of industries. Our skilled team of fabricators and
              designers bring innovation to the forefront, ensuring that each
              project is a testament to uncompromising quality. Whether you are
              in need of precision components or intricate metal designs, Three
              Rivers Fabrication is your trusted partner for reliable and
              tailored solutions. Experience the difference of craftsmanship and
              precision. Choose Three Rivers Fabrication for all your metal
              fabrication needs.
            </p>
          </div>
          <div className="flex flex-row justify-center mx-4">
            <Image
              className="rounded-xl"
              src="/placeholder.jpeg"
              alt="placeholder"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between my-10">
          <div>
            <h1 className="text-4xl text-center md:text-left font-medium">
              Our Location
            </h1>
            <p className="text-xl text-center md:text-left my-2">
              27-31 Browning Street
              <br /> Wangaratta <br />
              VIC, Australia 3677
            </p>
          </div>
          <div className="flex flex-row justify-center mx-4">
            <Image
              className="rounded-xl cursor-pointer hover:shadow-lg shadow-md transition ease-in-out duration-150"
              src="/location.png"
              alt="placeholder"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
