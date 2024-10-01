

const page = ({searchParams}) => {

  const post = searchParams;
  return (
    <div>{post.title}</div>
  )
}

export default page