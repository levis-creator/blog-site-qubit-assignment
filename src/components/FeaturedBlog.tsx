import React from "react";
import Avatar, { genConfig } from "react-nice-avatar";

const FeaturedBlog = () => {
  const config = genConfig();
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center my-10">
      {/* image */}
      <div className="flex-1">
        <img src="https://picsum.photos/800/500" alt="dummy image" />
      </div>
      <div className="flex-1 space-y-3">
        {/* category */}
        <h4 className="font-semibold text-blue-500 text-xl">Category</h4>
        {/* title */}
        <h2 className="font-bold text-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          consectetur quisquam culpa voluptatem
        </h2>
        {/* author */}
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8" {...config} />
          <div className="inline-flex items-center gap-2 text-slate-500">
            <p>Esther Munyiva</p>
            <span>&bull;</span>
            <p>21st Mar 2022</p>
          </div>
        </div>
        {/* published date */}
      </div>
    </div>
  );
};

export default FeaturedBlog;
