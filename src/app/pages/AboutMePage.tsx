import { ImageWithFallback } from "../components/ImageWithFallback";
import profilePhoto from "../../imports/Profile_foto.png";

export function AboutMePage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-200">
            <ImageWithFallback
              src={profilePhoto}
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1>About Me</h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Hi, I'm a 17-year-old student passionate about web development and technology.
              I'm currently studying BTEC Level 2 Information and Creative Technology (Web),
              where I'm building skills in HTML, CSS, JavaScript, Python, and database design.
            </p>
            <p>
              I love creating clean, user-friendly websites and solving problems through code.
              Whether it's designing a responsive layout, writing JavaScript functions, or
              building a database schema, I enjoy the challenge of bringing ideas to life
              through technology.
            </p>
            <p>
              This portfolio showcases the projects I've built during my studies and
              demonstrates my commitment to learning and improving as a developer.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-20">
        <h2 className="mb-8">Education</h2>
        <div className="bg-white border border-black/10 rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2">BTEC Level 2 Information and Creative Technology (Web)</h3>
              <p className="text-[#4A4A4A] mb-3">Uxbridge College • 2025 - 2026</p>
              <p className="text-sm leading-relaxed">
                Comprehensive course covering web design fundamentals, front-end development (HTML, CSS, JavaScript),
                database systems (SQL), and software development principles. Includes practical coursework building
                real-world applications and websites.
              </p>
            </div>
            <div className="border-t border-black/10 pt-6">
              <h4 className="mb-3">Key Modules</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>Web Design Principles</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>HTML, CSS & JavaScript</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>Database Development (SQL)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>Software Development (Python)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>User Experience Design</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#17B3A6]">✓</span>
                  <span>Digital Graphics & Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-4">Front-End Development</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>HTML & CSS</span>
                  <span className="text-[#4A4A4A]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#E8B923] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>JavaScript</span>
                  <span className="text-[#4A4A4A]">Learning</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#FF6B5B] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Responsive Design</span>
                  <span className="text-[#4A4A4A]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#17B3A6] h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-4">Programming</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Python</span>
                  <span className="text-[#4A4A4A]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#E8B923] h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>SQL</span>
                  <span className="text-[#4A4A4A]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#FF6B5B] h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Git & GitHub</span>
                  <span className="text-[#4A4A4A]">Learning</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#17B3A6] h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-4">Design & Tools</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Figma</span>
                  <span className="text-[#4A4A4A]">Learning</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#E8B923] h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>VS Code</span>
                  <span className="text-[#4A4A4A]">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#FF6B5B] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Chrome DevTools</span>
                  <span className="text-[#4A4A4A]">Learning</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#17B3A6] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-8">Career Goals</h2>
        <div className="bg-white border border-black/10 rounded-lg p-8">
          <p className="text-lg leading-relaxed mb-6">
            My goal is to secure a junior web developer role or apprenticeship where I can continue
            learning and contributing to real-world projects. I'm particularly interested in front-end
            development and user experience design.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="mb-3">Short-term Goals</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#17B3A6]">→</span>
                  <span>Complete BTEC Level 2 with distinction grades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#17B3A6]">→</span>
                  <span>Build 5 more portfolio projects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#17B3A6]">→</span>
                  <span>Learn React and modern JavaScript frameworks</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Long-term Goals</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#E8B923]">→</span>
                  <span>Secure a junior developer or apprenticeship position</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#E8B923]">→</span>
                  <span>Become proficient in full-stack development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#E8B923]">→</span>
                  <span>Contribute to open-source projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
