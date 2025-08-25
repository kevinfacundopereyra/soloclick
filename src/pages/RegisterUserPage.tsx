export default function RegisterUserPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Registro Usuario
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}
