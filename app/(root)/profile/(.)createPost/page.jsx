"use client";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import CreatePostForm from "@/components/shared/CreatePostForm";

export default function CreatePostModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-cyan-50 p-10 rounded-lg shadow-lg">
        <CreatePostForm />
        <button
          className="absolute top-2 right-2 text-cyan-500 hover:text-cyan-700"
          onClick={() => router.back()}
        >
          <IoClose className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
