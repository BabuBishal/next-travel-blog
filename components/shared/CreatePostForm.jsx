// components/CreatePostForm.tsx
"use client";
import { client } from "@/sanity/lib/client";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [publishedAt, setPublishedAt] = useState("");
  const [body, setBody] = useState("");

  const handleImageChange = (event) => {
    setMainImage(event.target.files[0]); // For simplicity, assuming single file upload
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data for the post
    const postData = {
      title,
      slug: {
        _type: "slug",
        current: title.toLowerCase().replace(/\s+/g, "-"),
      },
      author,
      mainImage,
      categories,
      publishedAt,
      body,
    };

    // Sanity API call to create the post
    try {
      const result = await client.create({
        _type: "post",
        title: postData.title,
        slug: postData.slug,
        author: { _type: "reference", _ref: postData.author },
        mainImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: postData.mainImage.asset._id, // You'll need to upload the image first
          },
        },
        categories: postData.categories.map((category) => ({
          _type: "reference",
          _ref: category,
        })),
        publishedAt: new Date().toISOString().split("T")[0],
        body: postData.body,
      });

      console.log("Post created", result);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl w-full mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Categories (comma separated)
        </label>
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value.split(","))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Main Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
        />
      </div>

      {/* <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Published At
        </label>
        <input
          type="datetime-local"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div> */}

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePostForm;
