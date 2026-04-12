import BlogBody from "../components/BlogBody";
import HeaderBlog from "../components/HeaderBlog";



function Blog() {
    return (
        <>
            <main className="my-10 flex flex-col gap-10">
                    <HeaderBlog/>
                    <BlogBody/>         
            </main>
        </>
    )
}
export default Blog;