"use client";
import MDEditor from "@uiw/react-md-editor";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { categoriesQuery } from "@/lib/queries";

const postSchema = z.object({
  title: z.string().min(2, "Title is required"),
  // author: z.string().min(2, "Author is required"),
  mainImage: z
    .any()
    .refine((file) => file && file.length > 0, "Image is required"),
  categories: z.array(z.string().min(1)).refine((val) => val.length > 0, {
    message: "At least one category is required",
  }),

  publishedAt: z.string().optional(),
  post: z.string().min(2, "Post content is required"),
});

const CreatePostForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await client.fetch(categoriesQuery);
      setCategoriesList(categories);
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    const imageAlt = data.mainImage[0].name.split(".")[0];
    formData.append("title", data.title);
    formData.append("categories", JSON.stringify(data.categories));
    formData.append("mainImage", data.mainImage[0]);
    formData.append("mainImageAlt", imageAlt);
    formData.append("post", data.post);
    try {
      // Prepare the FormData
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) {
        toast.error("Failed to create post");
        throw new Error(result.error || "Failed to create post");
      }
      toast.promise(res, {
        loading: "Creating Post...",
        success: "Post created successfully!",
        error: "Error",
      });
      reset();
    } catch (err) {
      toast.error("Error:", err);

      console.error("Error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="max-w-2xl w-full mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h2>

      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.title && (
          <p className="text-red-500">{errors.title?.message}</p>
        )}
      </div>

      {/* <div className="space-y-2">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          id="author"
          type="text"
          {...register("author")}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.author && (
          <p className="text-red-500">{errors.author?.message}</p>
        )}
      </div> */}

      <div className="space-y-2">
        <label
          htmlFor="categories"
          className="block text-sm font-medium text-gray-700"
        >
          Categories
        </label>
        <select
          id="categories"
          multiple
          {...register("categories")}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {categoriesList.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
        {errors.categories && (
          <p className="text-red-500">{errors.categories?.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register("mainImage")}
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
        />
        {errors.mainImage && (
          <p className="text-red-500">{errors.mainImage?.message}</p>
        )}
      </div>

      <div data-color-mode="light" className="space-y-2">
        <label
          htmlFor="post"
          className="block text-sm font-medium text-gray-700"
        >
          Post
        </label>

        <MDEditor
          id="post"
          value={watch("post")}
          onChange={(val) => setValue("post", val)}
          height={300}
          preview="edit"
          textareaProps={{
            placeholder: "Write your post content here.",
          }}
        />

        {errors.post && <p className="text-red-500">{errors.post?.message}</p>}
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
