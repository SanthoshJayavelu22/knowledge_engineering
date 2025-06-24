import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import { CalendarDays, Clock, User } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: img1,
      date: "20 Oct 2023",
      title: "It is a long established fact that a reader will be Standard Part",
      excerpt: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot...",
      author: "Admin",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      image: img2,
      date: "15 Oct 2023",
      title: "How to improve your business strategy with modern techniques",
      excerpt: "Discover the latest strategies that are transforming businesses in today's competitive landscape.",
      author: "Jane Doe",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 3,
      image: img2,
      date: "10 Oct 2023",
      title: "The future of digital marketing in 2024",
      excerpt: "Learn about the emerging trends that will shape digital marketing in the coming year.",
      author: "John Smith",
      readTime: "4 min read",
      featured: false
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* <span className="inline-block bg-[var(--color-secondary)] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            News & Blogs
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-[var(--color-secondary)]">News</span> & Blog
          </h2>
          <div className="w-16 h-1 bg-[var(--color-secondary)] mx-auto"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div 
            className="lg:col-span-2 group" 
            data-aos="fade-up"
          >
            <article className="h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white text-[var(--color-secondary)] px-4 py-2 text-center rounded-lg shadow-md">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    <span className="font-medium">{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">
                    {blogPosts[0].title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[var(--color-secondary)] font-medium hover:underline"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          {/* Side Posts */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="100">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative overflow-hidden">
                    <img
                      loading="lazy"
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-white text-[var(--color-secondary)] px-2 py-1 text-xs rounded shadow-sm">
                      {post.date}
                    </div>
                  </div>
                  <div className="sm:w-2/3 p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">
                        {post.title}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <a 
                      href="#" 
                      className="text-sm text-[var(--color-secondary)] font-medium hover:underline flex items-center"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-secondary)] hover:bg-opacity-90 transition-all shadow-sm"
          >
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;