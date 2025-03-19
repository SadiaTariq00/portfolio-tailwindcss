
import React from "react";

function Skills() {
  return (
    <div id="skills" className="container mx-auto px-6 py-16 sm:py-24">
      <div className="grid sm:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold text-gray-900" data-aos="fade-up">My Skills</h2>
          <p className="text-gray-600 pt-4 leading-relaxed">
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.  
My expertise extends to modern frameworks like Next.js and styling libraries such as Tailwind CSS,  
which allow me to build highly responsive, dynamic, and visually appealing web applications.  
I am passionate about writing clean, efficient, and maintainable code while keeping up with the  
latest industry trends and best practices. My continuous learning mindset drives me to explore new  
technologies, optimize performance, and enhance user experiences in every project I work on.  
I enjoy problem-solving and transforming ideas into functional, scalable applications that  
deliver seamless and engaging interactions for users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { name: "HTML", level: "90%" },
            { name: "CSS", level: "85%" },
            { name: "JavaScript", level: "75%" },
            { name: "Next.js", level: "80%" },
            { name: "Tailwind CSS", level: "90%" },
            { name: "TypeScript", level: "70%" },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800" data-aos="fade-right">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;