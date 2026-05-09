import { ImageWithFallback } from "../components/ImageWithFallback";
import hugPupsImg from "../../imports/image-1.png";
import rustToolkitImg from "../../imports/image.png";

export function WebDesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4">Web Design</h1>
        <p className="text-lg max-w-3xl">
          The Web Design Page focuses on the visual and user-experience side of my work  the planning, decisions, and design systems behind each project. My target audiences are potential employers and college tutors, so design choices on each project are made with readability, accessibility and clear visual hierarchy in mind. Below are the design decisions, colour schemes, typography choices, and accessibility considerations that shaped my projects.
        </p>
      </div>

      <section className="mb-12 md:mb-20">
        <h2 className="mb-6 md:mb-8">Wireframes & Mockups</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white border-4 border-[#548235] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={hugPupsImg}
                alt="HugPups Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#548235]"></div>
              <h3>HugPups Design</h3>
            </div>
            <p>Homepage layout for the HugPups therapy dog visitation service. The design uses a clean two-column structure with a clear call-to-action above the fold and a soft, approachable colour scheme suited to the calming nature of the service.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-4 border-[#FF7F50] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={rustToolkitImg}
                alt="Rust Toolkit Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF7F50]"></div>
              <h3>Rust Toolkit Design</h3>
            </div>
            <p>Dark-themed interface for the Rust Toolkit, designed around a card grid for the main feature areas. The orange accent colour matches the in-game branding, and tabbed navigation keeps the multi-feature site easy to move around.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-20">
        <h2 className="mb-6 md:mb-8">Colour Schemes</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#548235]"></div>
              <h3>HugPups Palette</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#548235]"></div>
                <div>
                  <p className="font-bold">#548235</p>
                  <p className="text-sm">Primary Green</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-white border border-black/10"></div>
                <div>
                  <p className="font-bold">#FFFFFF</p>
                  <p className="text-sm">White</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#3D6128]"></div>
                <div>
                  <p className="font-bold">#3D6128</p>
                  <p className="text-sm">Dark Green</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#F5F5F5]"></div>
                <div>
                  <p className="font-bold">#F5F5F5</p>
                  <p className="text-sm">Light Gray</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF7F50]"></div>
              <h3>Rust Toolkit Palette</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#FF7F50]"></div>
                <div>
                  <p className="font-bold">#FF7F50</p>
                  <p className="text-sm">Coral Orange</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#1A1A1D]"></div>
                <div>
                  <p className="font-bold">#1A1A1D</p>
                  <p className="text-sm">Dark Background</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#2C2C2E]"></div>
                <div>
                  <p className="font-bold">#2C2C2E</p>
                  <p className="text-sm">Card Background</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#E5E5E5]"></div>
                <div>
                  <p className="font-bold">#E5E5E5</p>
                  <p className="text-sm">Light Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-20">
        <h2 className="mb-6 md:mb-8">Typography</h2>
        <div className="bg-white border border-black/10 rounded-lg p-8 space-y-6">
          <div>
            <p className="text-sm text-[#4A4A4A] mb-2">Primary Font</p>
            <h1 className="mb-2">Inter</h1>
            <p>A clean, modern sans-serif typeface chosen for excellent readability and professional appearance across all devices.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-black/10">
            <div>
              <p className="text-3xl font-bold mb-2">Aa</p>
              <p className="text-sm">Headings</p>
              <p className="text-xs text-[#4A4A4A]">Bold, 700</p>
            </div>
            <div>
              <p className="text-3xl mb-2">Aa</p>
              <p className="text-sm">Body Text</p>
              <p className="text-xs text-[#4A4A4A]">Regular, 400</p>
            </div>
            <div>
              <p className="text-2xl mb-2">48px</p>
              <p className="text-sm">H1 Size</p>
            </div>
            <div>
              <p className="text-2xl mb-2">32px</p>
              <p className="text-sm">H2 Size</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
