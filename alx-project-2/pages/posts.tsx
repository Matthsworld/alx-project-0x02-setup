import React from "react";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Posts</h1>
        <p>This is the posts page where we display blog posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;
