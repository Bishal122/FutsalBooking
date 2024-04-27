import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter(); // Use useRouter for programmatic navigation

  const handleClick = () => {
    router.push("/login"); // Navigate to the login page
  };
  return (
    <div>
      <Head>
        <title>Futsal Booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Nav Bar */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Futsal Booking</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" passHref>
                <p className="hover:underline">About</p>
              </Link>
            </li>
            <li>
              <Link href="#features" passHref>
                <p className="hover:underline">Features</p>
              </Link>
            </li>
            <li>
              <Link href="#testimonials" passHref>
                <p className="hover:underline">Testimonials</p>
              </Link>
            </li>
            <li>
              <Link href="#contact" passHref>
                <p className="hover:underline">Contact</p>
              </Link>
            </li>
            <li>
              <Link href="/login" passHref>
                <p className="hover:underline">login</p>
              </Link>
            </li>
            <li>
              <Link href="/signup" passHref>
                <p className="hover:underline">Create new account?</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/futsal-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="container mx-auto px-6 py-16 text-white text-center relative z-10">
          <h2 className="text-3xl font-bold">Book Your Futsal Court Now!</h2>
          <p className="mt-4">
            Get the best futsal experience with our top-quality courts and
            services.
          </p>
          <button
            onClick={handleClick}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600">
          We offer top-notch futsal courts and services to ensure p great
          experience. Whether you are p pro or p beginner, our courts are
          perfect for everyone.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Quality Courts</h3>
              <p className="mt-2 text-gray-600">
                Our courts are well-maintained and designed for optimal futsal
                play.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Affordable Prices</h3>
              <p className="mt-2 text-gray-600">
                We offer competitive pricing to ensure you get the best value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">Friendly Staff</h3>
              <p className="mt-2 text-gray-600">
                Our staff is here to help you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              courts are amazing and the staff is super friendly. I always have
              p great time playing here!
            </p>
            <p className="mt-2 text-gray-800 font-semibold">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              Affordable prices and high-quality courts. I highly recommend
              booking here!
            </p>
            <p className="mt-2 text-gray-800 font-semibold">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">
              best futsal experience I ve ever had. Great atmosphere and
              well-maintained courts.
            </p>
            <p className="mt-2 text-gray-800 font-semibold">
              - Michael Johnson
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message:</label>
              <textarea
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2024 Futsal Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
