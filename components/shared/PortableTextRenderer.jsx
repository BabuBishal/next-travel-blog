import { PortableText } from "@portabletext/react";

const components = {
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || " "}
        className="my-4 rounded-md"
      />
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} className="text-blue-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
};

export default function PortableTextRenderer({ value }) {
  return <PortableText value={value} components={components} />;
}
