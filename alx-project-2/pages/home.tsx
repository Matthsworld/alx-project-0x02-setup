import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>
      <div className="grid gap-4">
        <Card title="Property 1" content="This is a description of property 1." />
        <Card title="Property 2" content="This is a description of property 2." />
        <Card title="Property 3" content="This is a description of property 3." />
      </div>
    </div>
  );
};

export default HomePage;

/* const HomePage = () => {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
      </div>
    );
  };
  
  export default HomePage;
  */
