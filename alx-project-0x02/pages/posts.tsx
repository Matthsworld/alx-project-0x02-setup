import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))) // Limit to 10 posts for brevity
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;

/*import React from "react";
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
*/