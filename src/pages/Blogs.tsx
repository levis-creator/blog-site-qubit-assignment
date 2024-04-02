import React from "react";
import FeaturedBlog from "../components/FeaturedBlog";

const Blogs = () => {
  return (
    <div>
      <div className="text-center space-y-6">
        <h1 className="font-bold text-2xl">Our Blogs</h1>
        <p className="text-slate-500 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi
          iusto, ex eaque impedit non corporis odit dolorum et, obcdateaecati
          alias laborum. Odiodate, nihil consequuntur. Alias quae enim ut quam.
        </p>
      </div>
      <FeaturedBlog />
    </div>
  );
};

export default Blogs;
