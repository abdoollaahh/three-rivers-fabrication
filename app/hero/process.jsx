const serviceDB = [
  {
    id: 1,
    title: 'Consultation Services',
    description:
      'We start by understanding your unique requirements and desired outcomes',
  },
  {
    id: 2,
    title: 'Custom Fabrication',
    description:
      'Our skilled team brings your vision to life with precision and craftsmanship.',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description:
      'We ensure that every product meets our high standards of quality and durability.',
  },
  {
    id: 4,
    title: 'Product Delivery',
    description:
      'We deliver your custom fabricated product on time and ready for use.',
  },
];

const Process = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto min-h-[50rem] md:max-h-[50rem]">
        <div className="flex md:flex-row w-full flex-col text-center md:text-left md:justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold my-2">
              Custom Metal
              <br /> Fabrication Solutions
              <br /> That Exceed Expectations
            </h1>
            <p className="text-xl my-2">
              Experience the finest craftsmanship and precision engineering
              <br /> in every project we undertake.
            </p>
            <button className="border p-2 rounded-lg bg-slate-500 text-white my-2">
              Discover
            </button>
          </div>
          <div className="flex flex-col">
            {serviceDB.map((service, index) => (
              <div key={service.id}>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      className="m-4"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="20"
                      viewBox="0 0 640 512">
                      <path
                        fill="currentColor"
                        d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
                      />
                    </svg>
                    <div className="flex flex-row">
                      <div className="border-r border-rose-900 w-10 h-10"></div>
                      <div className="border-l border-rose-900 w-10 h-10"></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="font-semibold">{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
