// Home page content from Home.jsx, adapted for /app/page.tsx
import React from "react";

import Hero from "components/Hero";
import About from "components/About";
import Dining from "components/Dining";
// import CullinaryClass from "components/CullinaryClass";
import Tour from "components/Tour";
import Experiences from "components/Experiences";
// import Stay from "components/Stay";
import Events from "components/Events";
import Contact from "components/Contact";
// import Shop from "components/Shop";
import Conservation from "components/Conservation";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <Hero/>
      <About/>
      <Dining/>
      {/* <CullinaryClass/> */}
      <Tour/>
      <Experiences/>
      {/* <Stay/> */}
      <Events/>
      {/* <Shop/> */}
      <Conservation/>
      <Contact/>
    </main>
  );
}
