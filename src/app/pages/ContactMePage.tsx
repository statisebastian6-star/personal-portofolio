import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export function ContactMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4">Contact Me</h1>
        <p className="text-lg max-w-3xl">
          I'm open to opportunities for apprenticeships, placements, or junior developer roles.
          Feel free to reach out if you'd like to discuss my work or potential opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h2 className="mb-8">Send a Message</h2>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-[#17B3A6]/10 border border-[#17B3A6] rounded-lg">
              <p className="text-[#17B3A6]">Thank you for your message! I'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name <span className="text-[#FF6B5B]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border ${
                  errors.name ? 'border-[#FF6B5B]' : 'border-black/10'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-[#FF6B5B]">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email <span className="text-[#FF6B5B]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border ${
                  errors.email ? 'border-[#FF6B5B]' : 'border-black/10'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-[#FF6B5B]">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message <span className="text-[#FF6B5B]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-white border ${
                  errors.message ? 'border-[#FF6B5B]' : 'border-black/10'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 resize-none`}
                placeholder="Tell me about your opportunity or inquiry..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-[#FF6B5B]">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B923] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <a href="mailto:statisebastian6@gmail.com" className="text-[#4A4A4A] hover:text-black transition-colors">
                    statisebastian6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6B5B] flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/sebastian-stati-0390ab408/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A4A4A] hover:text-black transition-colors"
                  >
                    linkedin.com/in/sebastian-stati-0390ab408
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#17B3A6] flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">GitHub</h3>
                  <a
                    href="https://github.com/statisebastian6-star"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A4A4A] hover:text-black transition-colors"
                  >
                    github.com/statisebastian6-star
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8B923] flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/statisebastian6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A4A4A] hover:text-black transition-colors"
                  >
                    @statisebastian6
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-8">
            <h3 className="mb-4">Response Time</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              I typically respond to messages within 24-48 hours during weekdays.
              For urgent inquiries, please reach out via email directly.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-8">
            <h3 className="mb-4">Availability</h3>
            <p className="text-sm text-[#4A4A4A] leading-relaxed">
              I'm currently seeking apprenticeship or junior developer opportunities
              starting from Summer 2026. Open to part-time roles during term time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
