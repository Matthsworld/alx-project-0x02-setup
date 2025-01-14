import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [posts, setPosts] = useState([
    { title: "Property 1", content: "This is a description of property 1." },
    { title: "Property 2", content: "This is a description of property 2." },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-6"
      >
        Add New Post
      </button>
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;

/*import React from "react";
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
*/
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
