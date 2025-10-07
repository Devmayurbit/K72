import React from 'react'

const BlogCard = ({ image1, image2, date, title, category }) => {
  const categoryLabel = category === 'tech'
    ? 'Tech & IA'
    : category === 'conseil'
    ? 'Conseil'
    : category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="w-full h-full flex flex-col">
      {/* Images Row */}
      <div className="flex flex-col lg:flex-row w-full h-64 lg:h-96">
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <img src={image1} alt="blog" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <img src={image2} alt="blog" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-md">
          <span className="text-black text-xl">&bull;</span>
          <span>{date}</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-extrabold uppercase leading-tight">
          {title}
        </h2>
        <div>
          <span className="inline-block bg-gray-200 text-black px-3 py-1 rounded text-sm font-semibold">
            {categoryLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
