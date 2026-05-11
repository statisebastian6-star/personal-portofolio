import { Link } from "react-router";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Briefcase, User, Mail } from "lucide-react";
import profilePhoto from "../../imports/Profile_foto.png";

export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <section className="py-12 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200">
              <ImageWithFallback
                src={profilePhoto}
                alt="Profile Photo"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="mb-4">Hello</h1>
              <p className="text-lg leading-relaxed">
                I'm a student web developer studying BTEC Level 2 Information and Creative Technology.
                I build clean, modern websites and love solving problems through code. This portfolio
                showcases my work in web design, development, software projects, and databases.
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                to="/personal-projects"
                className="w-16 h-16 rounded-full bg-[#E8B923] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                title="View Projects"
              >
                <Briefcase className="w-7 h-7 text-white" />
              </Link>
              <Link
                to="/about-me"
                className="w-16 h-16 rounded-full bg-[#FF6B5B] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                title="About Me"
              >
                <User className="w-7 h-7 text-white" />
              </Link>
              <Link
                to="/contact-me"
                className="w-16 h-16 rounded-full bg-[#17B3A6] flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                title="Contact Me"
              >
                <Mail className="w-7 h-7 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
