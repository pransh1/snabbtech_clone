import React from "react";
import "../css/Blog.css";

import Blog1 from "../assets/blog-1.jpeg";
import Blog3 from "../assets/blog-3.jpg";
import Blog4 from "../assets/blog-4.jpg";
import Blog5 from "../assets/blog-5.jpg";
import Blog6 from "../assets/blog-6.jpg";

const blogs = [
  {
    img: Blog1,
    title: "Why Auto Dealerships Need Digital Solutions",
    desc:
      "Auto dealerships operate in one of the most competitive, margin‑pressured environments in retail. At the same time, around 95% of buyers now start their car‑shopping journey online, researching models, prices, and financing long before they set foot in a showroom. In this reality, digital solutions are no longer “nice to"
  },
  {
    img: "https://snabbtech.com/wp-content/uploads/2025/11/5683440_29719011-300x200.jpg",
    title: "How to Build Fast Apps That Load in Under 1 Second",
    desc:
      "Let’s be honest nobody likes slow apps. In fact, studies show that if your app takes more than 2 seconds to load, users start dropping off. And in today’s world of instant everything, that’s a deal-breaker. That’s why speed isn’t just a “nice to have.” It’s a core feature. At"
  },
  {
    img: Blog3,
    title: "Flutter vs React Native: A 2025 Comparison Guide",
    desc:
      "If you are creating a mobile app in 2025, chances are you’ve heard the debate between Flutter and React Native. While they both allow you to build beautiful cross-platform apps and are highly popular and powerful, which one should you choose? Let’s make everything in a simple, friendly way. First,"
  },
  {
    img: Blog4,
    title: "Is Your No-Code App a Ticking Time Bomb?",
    desc:
      "Over the last few years, the no-code and low-code revolution has grown incredibly popular. Tools such as Webflow, Bubble, and Zapier provide the ability to create websites, apps, and workflows without even needing to type a single line of code. It’s an enormous victory for non-technical founders who seek to"
  },
  {
    img: Blog5,
    title: "The Backbone of Digital Transformation: Custom Software",
    desc:
      "Imagine running a Formula 1 race…. but you’re stuck driving a school bus. That’s exactly what it feels like trying to scale your business with outdated or generic software. Digital transformation isn’t about throwing tech at a problem. It’s about building smarter, faster, tailored systems that help your business run"
  },
  {
    img: Blog6,
    title: "Is Your Slow Digital Transformation Silently Killing Your Business?",
    desc:
      "In the current fast-paced digital age, companies that hesitate to undergo digital transformation risk lagging behind. Technology is advancing fast, and businesses that don’t keep up not only miss out on competitive edge but also end up paying more, being inefficient, and missing opportunities. That’s why it’s a mistake to"
  }
];

const Blog = () => {
  return (
    <section className="blog-main">
      <div className="blog-header">
        <h2>
          Our Latest <span>Blog Posts</span>.
        </h2>

        <button className="view-all">
          Show all our posts →
        </button>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>

              <button className="read-more">READ MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
