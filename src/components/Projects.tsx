import React from 'react';
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "Static Resume Builder",
    desc: "A powerful and customizable resume builder built with TypeScript, crafted using HTML and CSS to ensure a structured and elegant design.",
    img: "/resume.png",
    tags: ["HTML", "CSS", "TypeScript"],
    link: "https://hackathon-milestone-eight-khaki.vercel.app/",
  },
  {
    id: 1,
    title: "Blogging-App",
    desc: "A dynamic and interactive blogging app built with Next.js, seamlessly styled using Tailwind CSS for a modern, responsive, and engaging design.",
    img: "/blog.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://dynamic-blog-liard.vercel.app/",
  },
  {
    id: 2,
    title: "Todo List",
    desc: "A feature-rich and intuitive to-do list app built with Next.js, seamlessly utilizing Tailwind CSS for a clean and responsive design.",
    img: "/todo.png",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://todolist-ten-beryl.vercel.app/",
  },
  {
    id: 3,
    title: "Shopping Website",
    desc: "A modern eCommerce website built using Next.js, leveraging the power of Tailwind CSS for a sleek and responsive user interface.",
    img: "/shop.png",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://milestone3-ecommerce-web.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="container py-16">
      <Heading title="My Projects" />
      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
        {data.map((project) => (
          <div key={project.id} className="relative bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
            <img src={project.img} alt={project.title} className="w-full h-52 object-cover rounded-t-2xl" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-300">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white bg-teal-800 hover:bg-teal-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}