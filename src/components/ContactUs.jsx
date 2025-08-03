import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-xl border border-gray-200 space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Me</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Feel free to reach out via LinkedIn or Email.
          </p>
        </div>

        <div className="space-y-6">
          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition w-full">
            <Linkedin className="text-blue-700 w-6 h-6 shrink-0" />
            <a
              href="https://www.linkedin.com/in/gylax-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium text-sm sm:text-base hover:underline break-all"
            >
             LINKDIN
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition w-full">
            <Mail className="text-green-700 w-6 h-6 shrink-0" />
            <a
              href="mailto:jaisindhu489@gmail.com"
              className="text-green-700 font-medium text-sm sm:text-base hover:underline break-all"
            >
              GMAIL ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
