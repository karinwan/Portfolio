import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      image: "/images/project1.jpg",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "/projects/project-1",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      image: "/images/project2.jpg",
      tags: ["Vue", "Node.js", "MongoDB"],
      link: "/projects/project-2",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-4 shadow-md bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <Link href="/" className="text-blue-500 mx-2">Home</Link>
          <Link href="/projects" className="text-blue-500 mx-2">Projects</Link>
          <Link href="/blog" className="text-blue-500 mx-2">Blog</Link>
        </nav>
      </header>
      <main className="p-8">
        <section>
          <h2 className="text-xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-2 text-gray-700">
            Explore my <Link href="/projects" className="text-blue-500">projects</Link> and read my <Link href="/blog" className="text-blue-500">blog</Link>.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
