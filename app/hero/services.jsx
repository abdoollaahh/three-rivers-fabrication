const servicesDB = [
  {
    id: 1,
    title: 'Quality Repairs and Modifications to Enhance Your Metal Products',
    description:
      'Our skilled team provides expert on-site welding services to meet your requirements.',
    image: 'box',
  },
  {
    id: 2,
    title: 'Custom Solutions Tailored to Your Needs and Specifications',
    description:
      'We offer a wide range of options to customize your metal products.',
    image: 'box',
  },
  {
    id: 3,
    title:
      'Efficient and Reliable Metal Fabrication Services for Every Project',
    description:
      'Our team is dedicated to delivering high quality metal fabrication services on time',
    image: 'box',
  },
];

const Services = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center max-w-screen-xl mx-auto min-h-[30rem] md:max-h-[50rem]">
        <div>
          <h1 className="text-4xl text-center font-semibold mb-20">
            Discover Our Range of Services for Your Metal Fabrication Needs
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-around w-full gap-4">
          {servicesDB.map((service, id) => (
            <div key={id} className="w-80 text-center flex flex-col gap-2">
              <div className="w-full h-72 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition ease-in-out duration-150">
                Box
              </div>
              <h2 className="font-medium">{service.title}</h2>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
