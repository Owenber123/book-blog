import Image from "next/image";

const books = {
  journeys: [
    {
      title: "Observer",
      author: "Nancy Kress",
      image: "/books/observer.jpg",
      review: "A mind-bending exploration of reality with a simple fundamental change: consciousness creates matter.",
    },
    {
      title: "Dark Matter",
      author: "Blake Crouch",
      image: "/books/dark-matter.jpg",
      review: "A gripping thriller that explores the multiverse and the choices we make in life.",
    },
    {
      title: "The NVIDIA Way",
      author: "Jen-Hsun Huang",
      image: "/books/nvidia-way.jpg",
      review: "A fascinating look into the leadership and innovation strategies that shaped NVIDIA into a tech powerhouse.",
    },
    {
      title: "The Pines",
      author: "Blake Crouch",
      image: "/books/the-pines.jpg",
      review: "A suspenseful sci-fi thriller filled with mystery, set in a seemingly idyllic town with dark secrets.",
    },
    {
      title: "Recursion",
      author: "Blake Crouch",
      image: "/books/recursion.jpg",
      review: "A thought-provoking sci-fi thriller exploring the nature of memory and time.",
    },
    {
      title: "Upgrade",
      author: "Blake Crouch",
      image: "/books/upgrade.jpg",
      review: "A fast-paced genetic engineering thriller that questions the cost of human enhancement.",
    },
    {
      title: "Einstein and the Quantum Revolution",
      author: "David Bodanis",
      image: "/books/einstein-quantum-revolution.jpg",
      review: "A beautifully written account of Einstein’s contributions to quantum physics and how they reshaped our understanding of reality.",
    },
  ],
  learningShelf: [
    {
      title: "Effective C++",
      author: "Scott Meyers",
      image: "/books/effective-cpp.jpg",
      review: "A must-read for any C++ developer, offering practical advice on writing cleaner and more efficient C++ code.",
    },
    {
      title: "Design Patterns: Elements of Reusable Object-Oriented Software",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      image: "/books/design-patterns.jpg",
      review: "The foundational book for understanding software design patterns in object-oriented programming.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      image: "/books/clean-code.jpg",
      review: "A guide to writing readable, maintainable, and efficient code across all programming languages.",
    },
    {
      title: "C++ Concurrency in Action",
      author: "Anthony Williams",
      image: "/books/cpp-concurrency.jpg",
      review: "A comprehensive guide to writing concurrent and multithreaded C++ code, essential for modern development.",
    },
  ],
};

export default function Books() {
  return (
    <main className="p-6 max-w-screen-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Books</h1>

      {/* Journeys Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">🌍 Journeys</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.journeys.map((book, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={150}
                  height={225}
                  className="rounded"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{book.title}</h3>
              <p className="text-gray-400 italic">{book.author}</p>
              <p className="mt-2 text-gray-300">{book.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Shelf Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-green-500">📚 Learning Shelf</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.learningShelf.map((book, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={150}
                  height={225}
                  className="rounded"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">{book.title}</h3>
              <p className="text-gray-400 italic">{book.author}</p>
              <p className="mt-2 text-gray-300">{book.review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

