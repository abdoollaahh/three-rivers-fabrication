import Footer from '../components/Footer/footer';
import Nav from '../components/Navigation/nav';

const contactDB = [
  {
    id: 1,
    title: 'Phone',
    content: '+61 437 176 236',
    path: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
  },
  {
    id: 2,
    title: 'General Queries',
    content: 'info@threeriversfab.com',
    path: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
  },
  {
    id: 3,
    title: 'Product Queries',
    content: 'info@threeriversfab.com',
    path: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
  },
];

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col max-w-screen-xl mx-auto">
        <h1 className="text-8xl text-center md:text-left md:text-[12rem] text-slate-300 font-semibold my-2">
          CONTACT
        </h1>
        <div>
          <div>
            <div className="w-full flex flex-row items-center max-w-screen-xl mx-auto min-h-[30rem] md:max-h-[50rem] justify-around gap-20">
              {contactDB.map((contact, index) => (
                <div key={index} className="flex flex-row justify-center gap-5">
                  <div className="border flex flex-col justify-center items-center p-5 rounded-2xl">
                    <svg
                      className="text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                      viewBox="0 0 512 512"
                      fill="currentColor">
                      <path d={contact.path} />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-xl">{contact.title}</h1>
                    <p className="text-2xl">{contact.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
