import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

const featuredPostsType = defineType({
  name: "featuredPosts",
  title: "Featured Posts",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "posts",
      title: "Posts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
    }),
  ],
});

export default featuredPostsType;
