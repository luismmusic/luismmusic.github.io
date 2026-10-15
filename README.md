# luismmusic — Web personal de Luis Enrique Méndez Mora

Sitio estático (HTML + CSS + JS, sin dependencias) publicado en **GitHub Pages**. Bilingüe ES / EN.

🌐 **https://luismmusic.github.io**

## Estructura

```
index.html          Estructura de la página
tarjeta.html        Tarjeta de presentación imprimible (85 × 55 mm)
css/style.css       Diseño (tema oscuro neón violeta/cian)
js/content.js       ← CONTENIDO: servicios, experiencia, créditos, formación, reproductores
js/i18n.js          Textos de la interfaz en ES / EN
js/main.js          Lógica (idioma, animaciones, visualizador, formulario)
assets/             Imágenes, favicon y código QR vectorizado
```

## Editar contenido

- **Todo el contenido** (experiencia, servicios, créditos…) está en `js/content.js`, con versión `es` y `en`.
- **Añadir música/vídeos:** en `js/content.js`, dentro de `media: []`, pega enlaces normales de YouTube, Spotify o SoundCloud:

  ```js
  media: [
    { url: "https://open.spotify.com/album/XXXX", title: { es: "Otra Historia — EXP", en: "Otra Historia — EXP" } },
    { url: "https://www.youtube.com/watch?v=XXXX", title: { es: "Videoclip", en: "Music video" } }
  ],
  ```

- **Formulario de contacto:** por defecto abre el cliente de correo del visitante con el mensaje ya redactado.
  Para recibir los mensajes directamente, crea un formulario gratis en [formspree.io](https://formspree.io) y pon su ID en `contact.formspreeId`.

## Ver en local

```powershell
npx -y serve .
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `luismendez.github.io` si tu usuario es `luismendez` → la web quedará en `https://luismendez.github.io`; con cualquier otro nombre quedará en `https://USUARIO.github.io/NOMBRE-REPO`).
2. Sube los archivos:

   ```powershell
   git init
   git add .
   git commit -m "Web personal"
   git branch -M main
   git remote add origin https://github.com/USUARIO/REPO.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`** → Save.
4. En 1–2 minutos la web estará publicada.
