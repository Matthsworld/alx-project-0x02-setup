import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      <div className="flex flex-col gap-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert("Small Button Clicked")}>
          Small Rounded-SM
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert("Medium Button Clicked")}>
          Medium Rounded-MD
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert("Large Button Clicked")}>
          Large Rounded-Full
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;

/*const AboutPage = () => {
    return (
      <div>
        <h1>About Us</h1>
        <p>This page provides information about the application and its purpose.</p>
      </div>
    );
  };
  
  export default AboutPage;
  */
  