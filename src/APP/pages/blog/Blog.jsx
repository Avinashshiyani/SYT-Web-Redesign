import React from "react";
import { useParams } from "react-router-dom";

import BlogWrapper from "./sections/BlogWrapper";
import Error500 from "../errorPages/Error500";
import useBlogData from "../../../hooks/Queries/blog/useBlogData";

function Blog() {
  const { id } = useParams();
  const { data: blogData, isLoading, isError, isSuccess } = useBlogData(id);

  return (
    <div className="w-screen max-w-[1440px] mx-auto">
      {isError && <Error500 />}
      {isLoading && <p>Loading blog details...</p>}
      {isSuccess && (
        <section className="flex flex-col p-4 md:p-8 lg:p-10">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-60 md:h-72 object-cover rounded-lg mb-4 md:mb-8"
          />

          <BlogWrapper blog={blogData} />

          {/* <RelatedBlogs /> */}
        </section>
      )}
    </div>
  );
}

export default Blog;
