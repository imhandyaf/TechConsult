import { Wrench, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">The Digital Handyman</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your neighborhood's trusted Digital Handyman. We fix, install, and support 
              all your family's technology needs with patience and care.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-slate-800 border-slate-700 hover:bg-primary"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-slate-800 border-slate-700 hover:bg-primary"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-slate-800 border-slate-700 hover:bg-primary"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-slate-800 border-slate-700 hover:bg-primary"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button className="hover:text-primary transition-colors">
                  Computer Services
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Smart Home Setup
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Network Solutions
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Emergency Support
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Data Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("waitlist")}
                  className="hover:text-primary transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">
            © 2024 The Digital Handyman. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-slate-400">Made with</span>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">❤️</span>
              <span className="text-slate-400">for our clients</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
