import Link from "next/link";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-white shadow-lg animate-fade-in-down">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 animate-bounce" />
          <span className="sr-only">Santosh's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 animate-fade-in-right">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse hover:text-gray-300"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse hover:text-gray-300"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse hover:text-gray-300"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 animate-pulse hover:text-gray-300"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-white animate-fade-in"
          id="hero"
        >
          <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-in-up">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-bounce">
                Welcome to Santosh's Portfolio
              </h1>
              <p className="mx-auto max-w-[700px] text-lg dark:text-gray-300 animate-fade-in-up">
                Explore my creative projects and learn more about my skills and experience.
              </p>
            </div>
            <div className="space-x-4 animate-fade-in-up">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-500 shadow transition-colors hover:bg-gray-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                href="#"
              >
                View Projects
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                href="#"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 animate-fade-in" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-bounce">
                  My Projects
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up">
                  Check out some of the projects I've worked on.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fade-in-up">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950 animate-scale-up hover:shadow-2xl transition-shadow">
                <img
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold animate-fade-in-up">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 animate-fade-in-up">
                    A brief description of the first project.
                  </p>
                  <div className="mt-4 animate-fade-in-up">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-950 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950 animate-scale-up hover:shadow-2xl transition-shadow">
                <img
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold animate-fade-in-up">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 animate-fade-in-up">
                    A brief description of the second project.
                  </p>
                  <div className="mt-4 animate-fade-in-up">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-950 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950 animate-scale-up hover:shadow-2xl transition-shadow">
                <img
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold animate-fade-in-up">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 animate-fade-in-up">
                    A brief description of the third project.
                  </p>
                  <div className="mt-4 animate-fade-in-up">
                    <Link
                      className="inline-flex h-8 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-950 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
                      href="#"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-white animate-fade-in"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-bounce">About Me</h2>
                <p className="text-lg dark:text-gray-300 animate-fade-in-up">
                  Hi, I'm Santosh Chapagain, a student with a passion for web development and design. I've been honing
                  my skills in HTML, CSS, JavaScript, and various frameworks and libraries. Check out some of my
                  projects below to see what I've been working on.
                </p>
                <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
                  <div className="bg-white/20 rounded-lg p-4 animate-scale-up hover:bg-white/30 transition-colors">
                    <h3 className="text-lg font-bold">Skills</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 animate-scale-up hover:bg-white/30 transition-colors">
                    <h3 className="text-lg font-bold">Experience</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Internship at ABC Company</li>
                      <li>Personal projects</li>
                      <li>Freelance work</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center animate-fade-in-right">
                <img
                  alt="Santosh Chapagain's Avatar"
                  className="rounded-full w-64 h-64 object-cover shadow-lg animate-spin-slow"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 animate-fade-in" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-bounce">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 animate-fade-in-up">
                  Feel free to reach out if you have any questions or would like to collaborate.
                </p>
              </div>
              <form className="w-full max-w-md space-y-4 animate-fade-in-up">
                <div className="space-y-2 animate-scale-up">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required type="text" />
                </div>
                <div className="space-y-2 animate-scale-up">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" />
                </div>
                <div className="space-y-2 animate-scale-up">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required rows={4} />
                </div>
                <Button
                  className="w-full animate-pulse hover:bg-orange-600 hover:text-white transition-colors"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800 text-gray-500 dark:text-gray-400 animate-fade-in-up">
        <div className="container max-w-7xl flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm animate-pulse">© 2024 Santosh Chapagain's Portfolio</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0 animate-fade-in-right">
            <Link
              className="text-sm hover:underline underline-offset-4 animate-pulse hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 animate-pulse hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 animate-pulse hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              href="#"
            >
              Disclaimer
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}