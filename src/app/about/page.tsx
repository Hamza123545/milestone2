// app/about/page.tsx

import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="about flex flex-col-reverse md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg">
      
      {/* Text Section */}
      <div className="about-text md:w-1/2 md:pl-6 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">
          About <span className="text-blue-500">Me</span>
        </h2>
        <h4 className="text-lg font-semibold mb-4 text-blue-600">Full-Stack Developer</h4>
        <p className="mb-6 text-gray-700 leading-relaxed">
        Hello! I’m Hamza, a passionate Full-Stack Developer with a strong focus on building user-centered, responsive web experiences. With a solid foundation in both front-end and back-end technologies, I specialize in crafting scalable, interactive, and visually appealing web applications.

I have a deep understanding of core web technologies like HTML, CSS, and JavaScript, and I use TypeScript to enhance code quality and maintainability. My experience extends to powerful frameworks like AngularJS and Next.js, allowing me to build dynamic, single-page applications with smooth user interactions.

On the back-end, I’m proficient in PHP, SQL Server, C#, and ASP .NET Core, enabling me to design and develop robust, efficient server-side solutions. Whether it’s building APIs, optimizing database queries, or deploying enterprise-level applications, I leverage these technologies to deliver high-performance web applications that meet client needs and exceed expectations.

I’m driven by the challenge of solving complex problems with clean, efficient code, and I’m committed to delivering web solutions that are both functional and visually compelling. If you're looking for a developer who can bring your web projects to life, I’m here to help!


        </p>
        <Link href="/about" className="btn-box bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full hover:from-blue-600 hover:to-indigo-700 transition">
          More About Me
        </Link>
      </div>

      {/* Image Section */}
      <div className="about-img md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
        <Image
          src="/software-developer-6521720_1280.jpg"
          alt="A portrait of Fatima"
          width={400}
          height={400}
          className="rounded-full shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default AboutPage;
