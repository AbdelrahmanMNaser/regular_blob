// Home.js
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Card from "../components/Card";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div
        className={`absolute transition-transform duration-700 ease-in-out transform ${
          showOptions ? "-translate-x-full" : "translate-x-0"
        } w-full flex flex-col items-center`}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold text-gray-800">
          Shape Drawer
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-center mb-12 max-w-2xl text-gray-600">
          Create beautiful shapes with our intuitive drawing tools. Choose
          between precise geometric forms or flowing organic shapes.
        </p>
        <button
          onClick={() => setShowOptions(true)}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-xl text-lg sm:text-xl hover:bg-blue-600 transform hover:scale-105 transition-all"
        >
          Get Started →
        </button>
      </div>

      {/* Options Section */}
      <div
        className={`absolute transition-transform duration-700 ease-in-out transform ${
          showOptions ? "translate-x-0" : "translate-x-full"
        } w-full flex flex-col items-center`}
      >
        <BackButton onClick={() => setShowOptions(false)} />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold text-gray-800">
          Choose Your Style
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Card
            to="/regular"
            title="Regular Shapes"
            description="Create geometric shapes with precise angles and sides"
            linkText="Draw Shapes"
            titleColor="text-blue-500"
            linkColor="text-blue-500"
          />
          <Card
            to="/blob"
            title="Blob Shapes"
            description="Design organic, fluid shapes with smooth curves"
            linkText="Create Blobs"
            titleColor="text-emerald-500"
            linkColor="text-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
