
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import { CalendarDays, Clock, User } from 'lucide-react';
import aboutHero from '../assets/gallery1.jpg';
const BlogListPage = () => {
  const blogPosts = [
    {
      id: 1,
      image: img1,
      date: "20 Oct 2023",
      title: "It is a long established fact that a reader will be Standard Part",
      excerpt: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring...",
      author: "Admin",
      readTime: "5 min read"
    },
    {
      id: 2,
      image: img2,
      date: "15 Oct 2023",
      title: "How to improve your business strategy with modern techniques",
      excerpt: "Discover the latest strategies that are transforming businesses in today's competitive landscape.",
      author: "Jane Doe",
      readTime: "3 min read"
    },
    {
      id: 3,
      image: img2,
      date: "10 Oct 2023",
      title: "The future of digital marketing in 2024",
      excerpt: "Learn about the emerging trends that will shape digital marketing in the coming year.",
      author: "John Smith",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen md:mt-10">
                        <section className="relative mb-30">
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-90"></div>
                <img 
                  src={aboutHero} 
                  alt="Students learning" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                      Latest <span className="text-[var(--color-secondary)]">Articles</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                   Stay updated with the latest trends, insights, and success stories from our knowledge Engineering.
                    </p>
                  </div>
                </div>
              </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}


 

        {/* Blog Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg group"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white text-[var(--color-secondary)] px-3 py-1 text-sm rounded shadow">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  <a href="#" className="hover:text-[var(--color-secondary)] transition">
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-[var(--color-secondary)] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;
