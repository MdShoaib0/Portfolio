import React from 'react';

function ProjectCard({
  title = 'Real-Time Chat Application',
  category = 'Web Development',
  description = 'Scalable chat application with real-time messaging, file sharing, and video calls. Built with WebSocket technology and microservices architecture.',
  tags = ['React', 'Node.js', 'Socket.io', 'MongoDB'],
  liveDemo = '#',
  codeLink = '#',
}) {
  const buttons = [
    { label: 'Live Demo', href: liveDemo, primary: true },
    { label: 'Code', href: codeLink, primary: false },
  ];

  return (
    <div className="flex flex-col p-6 gap-4 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="bg-gradient-to-r from-sky-500 to-purple-500 w-full h-48 rounded-xl" />

      {/* Category */}
      <p className="px-4 py-0.5 text-sm font-medium text-slate-800 rounded-full bg-slate-300 w-fit">
        {category}
      </p>

      {/* Title & Description */}
      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold text-slate-700">{title}</p>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-700">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="py-0.5 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-2">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full px-6 py-1.5 rounded-xl border font-medium text-center transition-all duration-300 
              ${btn.primary
                ? 'bg-gradient-to-r from-sky-500 to-purple-700 text-white border-slate-300 hover:bg-slate-100 hover:text-black'
                : 'text-black border-slate-300 hover:bg-gradient-to-r hover:from-sky-500 hover:to-purple-700 hover:text-white'
              }`}
          >
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;