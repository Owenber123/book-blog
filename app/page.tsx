import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-xl mx-auto px-4">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Owen Beringer
      </h1>
      <p className="mb-4">
        {`Hello, thanks for stopping bye.`}
        <br/><br/>
        {`I hope you find some enjoyment or learn something new as you browse
          my assortment of projects, favorite books, and blog posts`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
