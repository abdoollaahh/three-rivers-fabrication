import Footer from '../components/Footer/footer';
import Nav from '../components/Navigation/nav';
import Image from 'next/image';

const galleryDB = [
  {
    id: 1,
    url: '/gallery/1.jpeg',
  },
  {
    id: 2,
    url: '/gallery/2.jpeg',
  },
  {
    id: 3,
    url: '/gallery/3.jpeg',
  },
  {
    id: 4,
    url: '/gallery/4.jpeg',
  },
  {
    id: 5,
    url: '/gallery/5.jpeg',
  },
  {
    id: 1,
    url: '/gallery/1.jpeg',
  },
  {
    id: 2,
    url: '/gallery/2.jpeg',
  },
  {
    id: 3,
    url: '/gallery/3.jpeg',
  },
  {
    id: 4,
    url: '/gallery/4.jpeg',
  },
  {
    id: 5,
    url: '/gallery/5.jpeg',
  },
];

const Gallery = () => {
  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col max-w-screen-xl mx-auto">
        <h1 className="text-8xl text-center md:text-left md:text-[12rem] text-slate-300 font-semibold my-2">
          GALLERY
        </h1>
        <div className="flex flex-wrap md:flex-row w-full flex-col text-center md:text-left md:justify-center gap-10 my-10">
          {galleryDB.map((image, id) => (
            <div key={id} className="flex flex-row justify-center mx-4 ">
              <Image
                className="rounded-xl w-88 h-80 shadow-md cursor-pointer hover:shadow-xl transition ease-in-out duration-150"
                src="/placeholder.jpeg"
                alt="placeholder"
                width={350}
                height={350}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
