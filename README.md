# 🌟 Proyecto de Búsqueda de Personajes

Este proyecto web permite visualizar y buscar personajes de cómics utilizando **componentes personalizados** (Web Components) desarrollados en JavaScript. Incluye tarjetas interactivas para mostrar detalles de cada personaje y una barra de búsqueda dinámica.

## 🚀 Tecnologías Usadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Components (Custom Elements & Shadow DOM)

## 📂 Estructura del Proyecto

```
├── index.html
├── css
│ └── styles.css
├── js
│ ├── app.js
│ ├── utils
│ │ └── characters.js
│ └── components
│ ├── CharacterCard.js
│ └── CharacterSearch.js
```
## 🧩 Componentes Personalizados

### 🔍 `<character-search>`
Componente con una barra de búsqueda. Filtra personajes por nombre o nombre clave y emite un evento personalizado `character-search`.

### 🃏 `<character-card>`
Muestra la información de cada personaje (nombre, imagen, casa, descripción, etc.) en una tarjeta estilizada.

## 📄 Descripción de Archivos

- `index.html`: Estructura base del sitio.
- `CharacterCard.js`: Define la tarjeta de cada personaje.
- `CharacterSearch.js`: Componente de búsqueda interactiva.
- `characters.js`: Contiene un array con los datos de los personajes.
- `app.js`: Renderiza las tarjetas y escucha el evento de búsqueda.

## 🎯 Funcionalidades

- Visualización de personajes mediante tarjetas dinámicas.
- Filtro de búsqueda en tiempo real.
- Uso de Shadow DOM para encapsular estilos y evitar conflictos.
- Diseño responsive y amigable.

## 🛠 Cómo usar

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Escribe el nombre o alias de un personaje para buscarlo.

## 📸 Créditos

Desarrollado por **Johana Niño (Camper)** – CAMPUSLANDS  
Copy © 2025