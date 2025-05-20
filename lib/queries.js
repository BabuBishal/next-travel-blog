export const authorsQuery = `*[_type == "author" && email == $email][0]{_id}`;

export const blogQuery = `*[_type == "post"]{
            _id,
            title,
            slug,
            publishedAt,
            mainImage,
            author->{_id, name, email},
            categories[]->{_id, title},
            post
          }`;

export const blogPostByIdQuery = `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{_id, name, email},
    categories[]->{_id, title},
    post
  }`;

export const featuredPostsQuery = `
    *[_type == "featuredPosts" && title == "Featured"][0]{
    posts[]->{
      _id,
      title,
      slug,
      mainImage,
      author->{name, email},
      categories[]->{title},
      publishedAt,
      post
    }
  }`;

export const topPostsQuery = `
    *[_type == "featuredPosts" && title == "TopPosts"][0]{
    posts[]->{
      _id,
      title,
      slug,
      mainImage,
      author->{name, email},
      categories[]->{title},
      publishedAt,
      post
    }
  }`;

export const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    categories[]->{_id, title},
    author->{name}
  }`;

export const categoriesQuery = `*[_type == "category"]{_id, title}`;
