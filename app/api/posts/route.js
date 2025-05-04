import { writeClient } from "@/sanity/lib/writeClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const post = formData.get("post");
    const mainImage = formData.get("mainImage");
    const categories = JSON.parse(formData.get("categories") || "[]");

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const name = session?.user?.name;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }

    // Fetch or create author
    let author = await writeClient.fetch(
      `*[_type == "author" && email == $email][0]{_id}`,
      { email }
    );

    if (!author?._id) {
      author = await writeClient.create({
        _type: "author",
        name,
        email,
        slug: {
          _type: "slug",
          current: name.toLowerCase().replace(/\s+/g, "-"),
        },
        imageUrl: session?.user?.image || "",
      });
    }

    // Upload image
    const imageFile = mainImage;
    const imageAsset = await writeClient.assets.upload("image", imageFile);

    // Create post
    const newPost = await writeClient.create({
      _type: "post",
      title,
      slug: {
        _type: "slug",
        current: title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      },
      post: [
        {
          _type: "block",
          _key: title + new Date().toISOString(),
          children: [
            {
              _type: "span",
              text: post,
              _key: `${title}-${post.length}`,
            },
          ],
        },
      ],
      mainImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
      categories: categories.map((id) => ({
        _type: "reference",
        _ref: id,
        _key: id,
      })),
      author: {
        _type: "reference",
        _ref: author._id,
      },
      publishedAt: new Date().toISOString().split("T")[0],
    });

    return new Response(JSON.stringify({ post: newPost }), { status: 200 });
  } catch (err) {
    console.error("Error creating post:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
