import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";

function PrivacyPolicy() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
      <WhiteNavbar />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-16 h-1 bg-orange-500 mb-10 rounded-full"></div>

          <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              Fellowship Church values you, and we want to protect the information you give us that allows us to communicate with you. To that end, we do not share data (including mobile opt-in data) with third parties for marketing or promotional purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;