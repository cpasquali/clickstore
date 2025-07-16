🛍️ ClickStore
ClickStore es una aplicación web desarrollada con React y Vite que simula una tienda online moderna. Este proyecto sirve como base para un e-commerce, incluyendo funcionalidades típicas como navegación por categorías, visualización de productos y manejo de carrito de compras.

🚀 Tecnologías utilizadas
React – Biblioteca principal para la interfaz de usuario

Vite – Empaquetador ultrarrápido para desarrollo moderno con React

ESLint – Reglas de estilo y calidad de código

JavaScript (con JSX)

📁 Estructura del proyecto
csharp
Copiar
Editar
ClickStore/
├── public/              # Archivos estáticos
├── src/                 # Código fuente principal
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes reutilizables (Navbar, ProductCard, etc.)
│   ├── pages/           # Páginas principales (Home, Store, Cart)
│   ├── context/         # Contexto global (manejo de carrito)
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Punto de entrada de la app
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
└── vite.config.js       # Configuración de Vite
📦 Instalación
Clona este repositorio:

bash
Copiar
Editar
git clone https://github.com/cpasquali/clickstore.git
cd clickstore
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia el entorno de desarrollo:

bash
Copiar
Editar
npm run dev
⚙️ Scripts disponibles
npm run dev – Ejecuta el servidor de desarrollo

npm run build – Compila el proyecto para producción

npm run preview – Previsualiza el build localmente

npm run lint – Ejecuta ESLint para ver errores de estilo
