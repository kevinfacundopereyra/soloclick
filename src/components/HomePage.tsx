export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">SoloClick</h1>
        <nav className="space-x-6 text-gray-600 font-medium">
          <a href="#features" className="hover:text-blue-600">
            Servicios
          </a>
          <a href="#about" className="hover:text-blue-600">
            Nosotros
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contacto
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Encuentra o ofrece{" "}
          <span className="text-blue-600">servicios profesionales</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          SoloClick une a profesionales de todas las áreas con usuarios que
          buscan contratar servicios de confianza: barberos, chefs, custodios,
          guías turísticos, transportistas ¡y mucho más!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Soy Profesional</h3>
            <p className="text-gray-600 mb-4">
              Regístrate y ofrece tus servicios a miles de usuarios.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
              Registrarme
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <span className="text-green-600 text-2xl">👤</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Soy Usuario</h3>
            <p className="text-gray-600 mb-4">
              Encuentra al profesional ideal para tus necesidades.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">
              Registrarme
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white shadow-inner py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SoloClick. Todos los derechos reservados.
      </footer>
    </div>
  );
}
