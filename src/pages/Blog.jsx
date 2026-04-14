import "../styles/blog.css";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { useEffect } from "react";
function Blog() {
  //
  const posts = [
    {
      title: "How To Get PDF Invoices On Shopify",
      author: "Daisy",
      desc: "Creating and downloading invoices on Shopify doesn’t have to feel technical or time-consuming. If you’ve ever struggled with generating clean, professional invoices or figuring out where to download them, you’re not alone...",
      image: blog1,
    },
    {
      title: "Best Tricks And Tips For Shopify Store Owners",
      author: "Tony",
      desc: "It is not so difficult to start a new business, but never an easy task to keep it going. Like any other entrepreneurs...",
      image: blog2,
    },
    {
      title: "Best Shopify Themes And Templates You Can Use",
      author: "Tony",
      desc: "The first point to be considered when starting a new website is how it looks to your customers...",
      image: blog3,
    },
  ];

  //
  const sections = [
    {
      title: "VIFY NEWS",
      desc: "Vify specializes in analyzing, researching, collecting, and compiling the most valuable information for its customers...",
    },
    {
      title: "INVOICE-RELATED ARTICLES",
      desc: "Creating and managing invoices are essential for Shopify stores. That’s why many store owners actively seek valuable insights on how to make the most of professional invoice apps. Explore the articles below—we’re confident they will provide great value for your business…",
    },
    {
      title: "SHOPIFY DEVELOPMENT TUTORIALS",
      desc: "Are you running a business on the Shopify platform? If so, below are some helpful articles covering the latest Shopify news, as well as practical insights on managing and operating your store effectively. In particular, Vify provides in-depth guides and tips on how to use and optimize popular apps that most Shopify stores rely on…",
    },
  ];
  useEffect(() => {
    document.title = "Blog - Vify shopify app";
  }, []);
  return (
    <>
      {/* HEADER */}
      <div className="blog-page">
        <h1>Blog</h1>
        <p>
          <a href="/">Home</a> - Blog
        </p>
      </div>

      {/* 3 SECTION */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="blog-container">
          <h2 className="blog-title">{section.title}</h2>

          <p className="blog-desc">{section.desc}</p>

          {/* GRID */}
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.image} alt={post.title} />

                <h3>{post.title}</h3>

                <div className="blog-meta">
                  By{" "}
                  <a href="/author/daisy" className="blog-author">
                    {post.author}
                  </a>{" "}
                  | 0 Comments
                </div>

                <p className="blog-text">{post.desc}</p>
              </div>
            ))}
          </div>
          <div className="blog-showmore-wrap">
            <Link to="/blog/category" className="blog-showmore-btn">
              SHOW MORE POST
            </Link>

            <div className="blog-line"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blog;
