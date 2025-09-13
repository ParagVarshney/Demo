export default function About() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white p-8 rounded-2xl shadow">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-purple-600">About</span>{" "}
            <span className="text-green-600">Us</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Viva Money is a digital financial lending platform offering instant personal loans. 
            By partnering up with Fincfriends Private Limited, registered with RBI, Viva Money provides 
            an affordable & easy way of taking a revolving credit line.
          </p>
          <p className="text-gray-700 mb-6">
            Viva Money stands as a pioneering member within the Viva family, as it extends its presence 
            to various countries, including Mexico and Italy.
          </p>
          <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Learn more
          </button>
        </div>

        
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpefeDj6_-3iPIm00mYXoD38uao_Hmq5Lwiw&s" 
            alt="Team"
            className="rounded-2xl shadow-lg w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-purple-600 text-white text-center py-3 rounded-b-2xl text-lg font-medium">
            Your Instant Financial Saathi
          </div>
        </div>
      </div>
    </section>
  );
}

