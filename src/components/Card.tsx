


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string;  
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden w-full sm:w-[380px] lg:w-[350px] hover:shadow-2x hover:shadow-teal-800 transition-all duration-200 transform hover:-translate-y-5">
        <div className="relative w-full h-[240px]">
          <Image
            className="object-cover object-center"
            src={img}
            layout="fill"
            alt={title}
          />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-teal-600 text-white py-1 px-3 rounded-full text-xs font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;