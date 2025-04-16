import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, X } from 'lucide-react';
import Modal from './Modal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-syncopate font-bold mb-6">EDDIE COLE®</h3>
            <p className="text-gray-400 font-bodoni">
              Redefining creative boundaries in fashion, photography, and design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-syncopate mb-6">NAVIGATION</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-syncopate mb-6">CONTACT</h4>
            <ul className="space-y-4 text-gray-400">
              <li>ecmgmnt@gmail.com</li>
              <li>+1 (612) 850-9007</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-syncopate mb-6">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/eddiecole.studios" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Eddie Cole®. All rights reserved. Eddie Cole is a registered trademark.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={() => setActiveModal('privacy')} 
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveModal('terms')} 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setActiveModal('cookies')} 
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <div className="space-y-6">
          <p className="text-sm text-gray-400">Last updated: April 14th, 2025 (09:00 EST)</p>
          
          <p>At Eddie Cole, your privacy is important to us. This Privacy Policy explains what information we collect and how we use it.</p>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">What We Collect</h3>
            <p>When you fill out our Contact Us form, we collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>The message you choose to send</li>
            </ul>
            <p className="mt-3">We do not collect any other personal data or track users through cookies or analytics tools.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
            <p>We use the information you provide only to respond to your inquiries or to follow up on your message.</p>
            <p className="mt-2">We do not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Share your information with third parties</li>
              <li>Sell your information</li>
              <li>Use your information for advertising</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">How We Store Your Data</h3>
            <p>Form submissions are sent securely using EmailJS and delivered directly to our business email inbox. We do not store your data on the website.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p>If you have any questions about your data, you can email us directly at ecmgmnt@gmail.com</p>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms of Service"
      >
        <div className="space-y-6">
          <p className="text-sm text-gray-400">Last updated: April 14th, 2025 (09:00 EST)</p>
          
          <p>Welcome to Eddie Cole! By using our website, you agree to the following terms:</p>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Use of Our Site</h3>
            <p>You are welcome to browse our site, view our portfolio, and contact us through the Contact Us form. You agree not to misuse or attempt to harm the website in any way.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Intellectual Property</h3>
            <p>All content, images, and materials on this site are the property of Eddie Cole and may not be copied, reused, or redistributed without permission.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Communications</h3>
            <p>When you submit a form, you agree that we may respond to your inquiry using the contact information you provide.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
            <p>We strive to keep the site running smoothly, but we are not liable for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Technical issues</li>
              <li>Inaccurate information</li>
              <li>Third-party interruptions</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Cookie Policy Modal */}
      <Modal
        isOpen={activeModal === 'cookies'}
        onClose={closeModal}
        title="Cookie Policy"
      >
        <div className="space-y-6">
          <p className="text-sm text-gray-400">Last updated: April 14th, 2025 (09:00 EST)</p>
          
          <p>This website does not use cookies or any form of tracking.</p>
          
          <p>We do not collect any browsing behavior or store any information on your device through cookies. We simply provide a platform for you to view our work and get in touch.</p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;