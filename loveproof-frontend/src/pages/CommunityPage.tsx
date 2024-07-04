import React from "react";

function CommunityPage() {
  return (
    <>
      <div className="flex">
        
        <main className="w-4/5 p-4">
          <header className="mb-4 flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Miscellaneous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Pass or fail?
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Relationship stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Find a Loyalty Test
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Relationship advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Relationship advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    NSFW
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Girls talk
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <section className="space-y-4">
            <article className="p-4 bg-white shadow rounded-lg">
              <header className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Help Wanted</h2>
                <span className="text-gray-500 text-sm">44m</span>
              </header>
              <p className="mt-2 text-gray-700">
                My bf and I have been in a long-distance relationship for 2
                years, but recently he's become mentally and emotionally
                abusive. He has narcissistic tendencies and often blames me for
                everything. Despite his claims of loyalty, he has a...
              </p>
              <footer className="flex justify-between items-center mt-4">
                <div className="flex space-x-2 items-center">
                  <button className="text-red-500">❤ 1</button>
                  <button className="text-blue-500">Like</button>
                </div>
                <button className="text-blue-500">Comment</button>
              </footer>
            </article>
            <article className="p-4 bg-white shadow rounded-lg">
              <header className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Tester here!</h2>
                <span className="text-gray-500 text-sm">10h</span>
              </header>
              <p className="mt-2 text-gray-700">
                I test both guys and girls. Let me help you get your peace of
                mind!
              </p>
              <footer className="flex justify-between items-center mt-4">
                <div className="flex space-x-2 items-center">
                  <button className="text-red-500">❤ 1</button>
                  <button className="text-blue-500">Like</button>
                </div>
                <button className="text-blue-500">Comment</button>
              </footer>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default CommunityPage;
