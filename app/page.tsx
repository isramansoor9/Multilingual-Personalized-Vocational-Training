"use client"; // <-- ADDED: Enables interactivity

import Image from "next/image";
import { useState } from "react"; // <-- ADDED: To manage FAQ state

export default function Home() {
  // --- ADDED: State for the FAQ Accordion ---
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Are the courses beginner friendly?",
      a: "Yes, all courses are designed for complete beginners with step-by-step guidance.",
    },
    {
      q: "Do I get a certificate?",
      a: "Yes, all courses provide government-recognized certification through NAVTTC & TEVTA.",
    },
    {
      q: "Is the learning self-paced?",
      a: "Yes, you can learn anytime at your own pace with AI-personalized support.",
    },
    {
      q: "Do I need prior technical knowledge?",
      a: "No, all courses start from basics and gradually move to advanced skills.",
    },
  ];
  // -------------------------------------------

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-10">
          {/* 👉 Logo + Special Teachus */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/image6.png"
              alt="Teachus Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-bold text-black tracking-wide">
              Teachus
            </span>
          </div>

          {/* 👉 Other nav items */}
          <div className="flex items-center gap-6">
            <span className="text-sm cursor-pointer hover:text-gray-700 transition-colors duration-200">
              Sparky
            </span>
            <span className="text-sm cursor-pointer hover:text-gray-700 transition-colors duration-200">
              Automated Assessment
            </span>
            <span className="text-sm cursor-pointer hover:text-gray-700 transition-colors duration-200">
              Courses
            </span>
            <span className="text-sm cursor-pointer hover:text-gray-700 transition-colors duration-200">
              User Dashboard
            </span>
          </div>
        </div>

        <button className="bg-black text-white px-6 py-2 rounded text-sm font-medium transition-all duration-300 hover:bg-gray-800 transform hover:scale-105">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Multilingual Personalized
            <br />
            Vocational Training
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Personalized, multilingual training powered by Recommendation
            Intelligence to enhance skills, boost employability, and drive youth
            empowerment.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded font-medium transition-all duration-300 hover:bg-gray-800 transform hover:scale-105">
            Register now !
          </button>
        </div>

        <div className="mt-12">
          <Image
            src="/images/image1.png"
            alt="Car engine maintenance"
            width={900}
            height={900}
            className="rounded-lg w-full h-auto object-contain transition-shadow duration-300 hover:shadow-xl"
          />
        </div>
      </section>

      {/* Explore Courses Section */}
      <section className="px-8 py-5 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* --- MODIFIED: Wrapped cards for better hover effect --- */}

          {/* Course 1 */}
          <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="w-full h-[400px] overflow-hidden">
              <Image
                src="/images/image2.png"
                alt="Course 1"
                width={700}
                height={700}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // <-- ADDED: Zoom effect
              />
            </div>
            <div className="p-6 bg-white">
              {" "}
              {/* <-- ADDED: Padding for text */}
              <h3 className="font-semibold text-xl mt-4">Course 1</h3>
              <p className="text-md font-medium text-gray-700 mt-1">
                Duration: 3 Months
              </p>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Gain practical, hands-on experience as an entry-level helper.
                This course focuses on skill-based learning to strengthen your
                technical foundations and prepare you for real-world tasks with
                confidence.
              </p>
            </div>
          </div>

          {/* Course 2 */}
          <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="w-full h-[400px] overflow-hidden">
              <Image
                src="/images/image3.png"
                alt="Course 2"
                width={700}
                height={700}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // <-- ADDED: Zoom effect
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-semibold text-xl mt-4">Course 2</h3>
              <p className="text-md font-medium text-gray-700 mt-1">
                Duration: 6 Months
              </p>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Develop hands-on expertise through practical, skill-based
                training. This course helps you strengthen your technical
                foundation and gain real-world experience as an electrician.
              </p>
            </div>
          </div>

          {/* Course 3 */}
          <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="w-full h-[400px] overflow-hidden">
              <Image
                src="/images/image4.png"
                alt="Course 3"
                width={700}
                height={700}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // <-- ADDED: Zoom effect
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-semibold text-xl mt-4">Course 3</h3>
              <p className="text-md font-medium text-gray-700 mt-1">
                Duration: 12 Months
              </p>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Gain mastery in advanced auto electrics with immersive,
                industry-focused, skill-based training. This course equips you
                with practical expertise to excel in professional automotive
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Features</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Text Side */}
          <div className="space-y-6">
            {/* --- ADDED: Hover effect to features --- */}
            <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              <h3 className="text-xl font-semibold">
                Multilingual Support (Urdu & English)
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Learn in the language you’re most comfortable with, ensuring
                better understanding, accessibility, and an inclusive learning
                experience.
              </p>
            </div>

            <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              <h3 className="text-xl font-semibold">
                Personalized Content Generation
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Receive learning materials customized to your pace, progress,
                and preferences, helping you focus on areas that matter most.
              </p>
            </div>

            <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              <h3 className="text-xl font-semibold">Automated Quizzes</h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Test your knowledge instantly with system-generated quizzes and
                assessments, providing immediate feedback to track your
                improvement.
              </p>
            </div>

            <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              <h3 className="text-xl font-semibold">
                Subject Specific Chatbot
              </h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Interact with an AI-powered chatbot trained in specific subjects
                to get accurate, intelligent guidance whenever you need it.
              </p>
            </div>

            <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-gray-50">
              <h3 className="text-xl font-semibold">History Saving</h3>
              <p className="text-gray-500 mt-2 text-base leading-relaxed">
                Your learning history is stored to personalize your experience,
                ensuring future content aligns with your evolving skills and
                progress.
              </p>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="pt-2">
            <Image
              src="/images/image5.png"
              alt="Robot hand reaching human hand"
              width={700}
              height={700}
              className="rounded-lg w-full h-auto object-cover transition-shadow duration-300 hover:shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* --- ADDED: Hover effect to cards --- */}
          {/* Card 1 */}
          <div
            className="p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-default"
            style={{ backgroundColor: "#c3bebb" }}
          >
            <h3 className="font-semibold text-lg mb-2">AI-Powered Learning</h3>
            <p className="text-black text-sm leading-relaxed">
              Harness the power of artificial intelligence for adaptive,
              personalized training tailored to your pace and progress. The
              system analyzes your performance, identifies areas for
              improvement, and adjusts content for clearer understanding. With
              AI-guided support, every learner can succeed efficiently and
              confidently.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-default"
            style={{ backgroundColor: "#c3bebb" }}
          >
            <h3 className="font-semibold text-lg mb-2">
              Industry-Relevant Skills
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Build practical, job-ready expertise through courses crafted in
              collaboration with industry professionals. Each module reflects
              real workplace requirements, ensuring you gain hands-on skills
              that align with current market demands and prepare you to perform
              confidently on the job.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-default"
            style={{ backgroundColor: "#c3bebb" }}
          >
            <h3 className="font-semibold text-lg mb-2">Government Certified</h3>
            <p className="text-black text-sm leading-relaxed">
              Our programs strictly follow NAVTTC and TEVTA standards, ensuring
              you receive training that meets nationally approved guidelines.
              Upon completion, you earn a credible, government-recognized
              certification that enhances your employability and is trusted by
              industries across the country.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-default"
            style={{ backgroundColor: "#c3bebb" }}
          >
            <h3 className="font-semibold text-lg mb-2">Job-Ready Outcomes</h3>
            <p className="text-black text-sm leading-relaxed">
              Graduate fully prepared for the workforce with strong technical
              skills, practical experience, and recognized certification. Our
              training builds the confidence and competence you need to begin
              your career successfully or take the next step toward
              advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">What Our Learners Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* --- ADDED: Hover effect to testimonials --- */}
          {/* Testimonial 1 */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <p className="text-xl font-medium italic mb-6">
              “A terrific piece of praise”
            </p>
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-semibold text-sm">Name</h4>
                <p className="text-gray-500 text-xs">Description</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <p className="text-xl font-medium italic mb-6">
              “A fantastic bit of feedback”
            </p>
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-semibold text-sm">Name</h4>
                <p className="text-gray-500 text-xs">Description</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <p className="text-xl font-medium italic mb-6">
              “A genuinely glowing review”
            </p>
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-semibold text-sm">Name</h4>
                <p className="text-gray-500 text-xs">Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-20"></div> {/* <-- Adds vertical space */}

      {/* Call To Action Section */}
      <section
        className="px-8 py-20 text-black text-center"
        style={{ backgroundColor: "#c3bebb" }}
      >
        <h2 className="text-4xl font-bold mb-6">
          Start Your Learning Journey Today
        </h2>
        <p className="text-black text-lg mb-8">
          Join thousands of learners building in-demand vocational skills with
          Teachus.
        </p>
        <button className="bg-white text-black px-10 py-3 rounded font-semibold transition-all duration-300 hover:bg-gray-200 transform hover:scale-105">
          Register Now
        </button>
      </section>

      {/* --- MODIFIED: FAQ Section --- */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex justify-between items-center w-full text-left py-2"
              >
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <span className="text-gray-500">
                  {openFaq === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === index ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* --- END OF MODIFIED FAQ --- */}

      {/* Footer */}
      <footer
        className="text-black px-8 py-12"
        style={{ backgroundColor: "#c3bebb" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold">Teachus</h3>
            <p className="text-black mt-2 text-sm">
              Empowering youth with modern vocational skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-black text-sm">
              {/* --- ADDED: Hover effect to links --- */}
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                Courses
              </li>
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                User Dashboard
              </li>
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                Automated Assessment
              </li>
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                Sparky
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-black text-sm">
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                Email: support@teachus.com
              </li>
              <li className="cursor-pointer hover:text-gray-700 transition-colors duration-200">
                Phone: +92 300 1234567
              </li>
              <li>Location: Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-black text-sm mt-10">
          © {new Date().getFullYear()} Teachus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}