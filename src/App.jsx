import React, { useState } from 'react';
import TruckIcon from './components/TruckIcon';
import Logo from './CompanyLogo';


function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="font-poppins text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        {/*<img src={logos} alt="" width={50} height={50} fill-opacity/>*/}
        <div className="w-[100px] h-[100px]">
         <Logo className="w-[100px] h-[100px]" />
        </div>
        <div>
          <li>Home</li>
          <li>About</li>
        </div>

      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1350&q=80')" }}

        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Delivering Goods Across India</h1>
          <p className="mt-2 text-lg">Fast. Safe. Reliable.</p>
          <button className="mt-6 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold">
            Request a Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-10 bg-gray-100" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {['Full Truck Load', 'Inter-State Logistics', 'Fast Delivery'].map((title, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <TruckIcon />
              <h4 className="text-xl font-semibold mt-4">{title}</h4>
              <p className="text-sm mt-2 text-gray-600">
                We provide {title.toLowerCase()} with safety and efficiency.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-10" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Amit S.', text: 'Reliable and on-time delivery every time!' },
            { name: 'Raj K.', text: 'Best transport experience so far across states.' },
            { name: 'Priya T.', text: 'Great service and responsive team.' }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="mt-4 text-sm font-semibold text-red-600">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form */}
      <section className="p-10 bg-gray-100" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">Request a Quote</h3>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <input type="text" required placeholder="Pickup Location" className="border p-2 rounded" />
          <input type="text" required placeholder="Drop Location" className="border p-2 rounded" />
          <input type="text" required placeholder="Goods Type" className="border p-2 rounded" />
          <input type="text" required placeholder="Weight (kg)" className="border p-2 rounded" />
          <input type="tel" required placeholder="Phone Number" className="border p-2 rounded md:col-span-2" />
          <button type="submit" className="bg-red-600 text-white py-2 rounded hover:bg-red-700 md:col-span-2">
            Submit
          </button>
        </form>
        {formSubmitted && (
          <p className="text-green-600 text-center mt-4 font-semibold">✅ Quote submitted! We’ll contact you soon.</p>
        )}
      </section>

      {/* Contact Section */}
      <section className="p-10" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Us</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> info@paragroadlines.com</p>
            <p><strong>Address:</strong> Ahmedabad, Gujarat, India</p>
          </div>
          <iframe
            className="w-full h-64 rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.4215002534706!2d72.58633571060635!3d22.971522918145094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e858a87c06eb3%3A0x7b6e307376a2233a!2sParag%20Roadlines!5e0!3m2!1sen!2sin!4v1754812599945!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>© 2025 Parag Roadlines</p>
      </footer>
    </div>
  );
}

export default App;
