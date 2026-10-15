/* =========================================================================
   CONTENIDO DEL SITIO — Luis Enrique Méndez Mora
   -------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar la web.
   Cada texto tiene su versión en español (es) e inglés (en).
   Fuente: "CV - Luis Enrique Mendez Mora V2.docx"
   ========================================================================= */

window.SITE = {
  /* ---------------------------------------------------------------------
     Datos de contacto
     --------------------------------------------------------------------- */
  contact: {
    email: "luisemendezm@gmail.com",
    phone: "+34 614 68 72 37",
    whatsapp: "34614687237",
    linkedin: "https://www.linkedin.com/in/luismmusic",
    location: { es: "Valencia, España", en: "Valencia, Spain" },
    /* Opcional: si creas un formulario gratis en https://formspree.io
       pega aquí su ID (ej. "xyzabcd") y los mensajes llegarán a tu correo
       sin abrir el cliente de email del visitante. */
    formspreeId: ""
  },

  /* ---------------------------------------------------------------------
     Roles que rotan en la portada
     --------------------------------------------------------------------- */
  roles: {
    es: ["Productor Musical", "Ingeniero de Audio", "Consultor Acústico", "Programador DSP"],
    en: ["Music Producer", "Audio Engineer", "Acoustic Consultant", "DSP Programmer"]
  },

  /* ---------------------------------------------------------------------
     Servicios
     icon: mic | sliders | room | code | remote | teach
     --------------------------------------------------------------------- */
  services: [
    {
      icon: "mic",
      title: { es: "Producción Musical", en: "Music Production" },
      text: {
        es: "Producción y dirección musical integral: arreglos, preproducción, grabación y dirección artística, de la idea al máster final.",
        en: "End-to-end music production and direction: arrangements, pre-production, recording and artistic direction, from idea to final master."
      }
    },
    {
      icon: "sliders",
      title: { es: "Mezcla & Mastering", en: "Mixing & Mastering" },
      text: {
        es: "Mezcla, mastering, edición y restauración de audio con estándares profesionales para artistas y clientes de todo el mundo.",
        en: "Mixing, mastering, editing and audio restoration to professional standards for artists and clients worldwide."
      }
    },
    {
      icon: "room",
      title: { es: "Consultoría Acústica", en: "Acoustic Consulting" },
      text: {
        es: "Cálculo de aislamiento, diseño arquitectónico y acondicionamiento acústico de estudios, con supervisión de obra y asesoría de equipamiento.",
        en: "Sound isolation calculations, architectural design and acoustic treatment for studios, including build supervision and gear advice."
      }
    },
    {
      icon: "code",
      title: { es: "Desarrollo DSP / VST", en: "DSP / VST Development" },
      text: {
        es: "Desarrollo de plugins VST y emulación analógica en NI Reaktor, y herramientas de procesamiento de audio a medida.",
        en: "VST plugin development and analog emulation in NI Reaktor, plus custom audio processing tools."
      }
    },
    {
      icon: "remote",
      title: { es: "Soporte Técnico & DAW", en: "Tech Support & DAW Setup" },
      text: {
        es: "Configuración remota de sistemas DAW, soporte técnico especializado para estudios y automatización de flujos de trabajo.",
        en: "Remote DAW system setup, specialized technical support for studios and workflow automation."
      }
    },
    {
      icon: "teach",
      title: { es: "Formación en Audio", en: "Audio Education" },
      text: {
        es: "Docencia en microfonía, física del sonido, producción y música, con experiencia en formación técnica y académica.",
        en: "Teaching microphone technique, physics of sound, production and music, with experience in technical and academic training."
      }
    }
  ],

  /* ---------------------------------------------------------------------
     Competencias clave
     --------------------------------------------------------------------- */
  skills: [
    {
      icon: "wave",
      title: { es: "Ingeniería de Audio y Acústica", en: "Audio Engineering & Acoustics" },
      tags: {
        es: ["Grabación", "Edición", "Mezcla", "Mastering", "Microfonía", "Física del sonido", "Diseño de estudios", "Acondicionamiento acústico", "Sonido en vivo (PA y monitores)"],
        en: ["Recording", "Editing", "Mixing", "Mastering", "Microphone technique", "Physics of sound", "Studio design", "Acoustic treatment", "Live sound (PA & monitors)"]
      }
    },
    {
      icon: "code",
      title: { es: "Software, Programación y Tecnología", en: "Software, Programming & Technology" },
      tags: {
        es: ["Pro Tools", "Logic Pro", "Reaper", "Melodyne", "Kontakt", "NI Reaktor", "Plugins VST", "Emulación analógica", "Análisis de sistemas", "Automatización"],
        en: ["Pro Tools", "Logic Pro", "Reaper", "Melodyne", "Kontakt", "NI Reaktor", "VST plugins", "Analog emulation", "Systems analysis", "Automation"]
      }
    },
    {
      icon: "note",
      title: { es: "Música y Docencia", en: "Music & Teaching" },
      tags: {
        es: ["Producción musical", "Dirección musical", "Arreglos", "Musicología", "Guitarra", "Teclado / Piano", "Formación técnica y académica"],
        en: ["Music production", "Musical direction", "Arranging", "Musicology", "Guitar", "Keyboard / Piano", "Technical & academic training"]
      }
    }
  ],

  /* ---------------------------------------------------------------------
     Experiencia profesional
     --------------------------------------------------------------------- */
  experience: [
    {
      period: { es: "2010 – Presente", en: "2010 – Present" },
      role: { es: "Productor Musical, Ingeniero de Audio & Consultor Acústico", en: "Music Producer, Audio Engineer & Acoustic Consultant" },
      org: "Freelance / Upwork",
      place: { es: "Remoto · Internacional", en: "Remote · International" },
      points: {
        es: [
          "Producción musical, grabación, edición, restauración de audio, mezcla y mastering para clientes internacionales.",
          "Consultoría en cálculo de aislamiento, diseño arquitectónico y ejecución de acondicionamiento acústico para estudios de grabación.",
          "Configuración remota de sistemas DAW y desarrollo de herramientas de procesamiento de audio."
        ],
        en: [
          "Music production, recording, editing, audio restoration, mixing and mastering for international clients.",
          "Consulting on sound isolation calculations, architectural design and acoustic treatment for recording studios.",
          "Remote DAW system configuration and development of audio processing tools."
        ]
      },
      credits: ["EXP — “Otra Historia” (Premio Arpa)", "Robert Vivo", "Janeth Swanson", "Eduardo Parra (Gaita)"]
    },
    {
      period: { es: "2016 – 2025", en: "2016 – 2025" },
      role: { es: "Productor Musical e Ingeniero de Audio", en: "Music Producer & Audio Engineer" },
      org: "CATERWU",
      place: { es: "Caracas", en: "Caracas" },
      points: {
        es: ["Ingeniería de grabación, mezcla y producción musical integral."],
        en: ["Recording engineering, mixing and full-scope music production."]
      },
      credits: ["Gran Radio Riviera", "Everything Flow", "Will Márquez (álbum póstumo)", "Raymond Furre", "Andrew Simar", "Avar", "Calle Santiago", "Ni3Al"]
    },
    {
      period: { es: "2015 – 2016", en: "2015 – 2016" },
      role: { es: "Diseñador de Estudio de Grabación", en: "Recording Studio Designer" },
      org: "Eco|Studio",
      place: { es: "Maracaibo", en: "Maracaibo" },
      points: {
        es: ["Diseño arquitectónico integral del estudio, supervisión de construcción, aislamiento y acondicionamiento acústico, y asesoría en adquisición de equipamiento técnico."],
        en: ["Full architectural design of the studio, construction supervision, isolation and acoustic treatment, and technical equipment purchasing advice."]
      }
    },
    {
      period: { es: "2009 – 2012", en: "2009 – 2012" },
      role: { es: "Profesor Técnico de Audio", en: "Audio Technology Instructor" },
      org: "TAC Maracaibo",
      place: { es: "Maracaibo", en: "Maracaibo" },
      points: {
        es: ["Docente titular en las áreas técnicas de microfonía y física del sonido para formación en audio profesional."],
        en: ["Lead instructor in microphone technique and physics of sound for professional audio training."]
      }
    },
    {
      period: { es: "2009 – 2010", en: "2009 – 2010" },
      role: { es: "Técnico de Sonido", en: "Sound Technician" },
      org: "Universidad Rafael Belloso Chacín",
      place: { es: "Maracaibo", en: "Maracaibo" }
    },
    {
      period: { es: "2005 – 2010", en: "2005 – 2010" },
      role: { es: "Ingeniero de Grabación y Productor Musical", en: "Recording Engineer & Music Producer" },
      org: "Jabes Pro",
      place: { es: "Maracaibo", en: "Maracaibo" },
      points: {
        es: ["Grabación y producción musical para artistas nacionales, incluyendo el tema “Déjame Amarte” (EXP) para la telenovela La Mujer Perfecta (Venevisión)."],
        en: ["Recording and music production for national artists, including the song “Déjame Amarte” (EXP) for the telenovela La Mujer Perfecta (Venevisión)."]
      },
      credits: ["EXP", "Argenis Carruyo", "GeneraSion", "Selah", "ExpanZion", "Adriana Belandria", "Pasaporte"]
    },
    {
      period: { es: "2000 – 2006", en: "2000 – 2006" },
      role: { es: "Ingeniero de Grabación, Mezcla y Consultor Acústico", en: "Recording & Mixing Engineer, Acoustic Consultant" },
      org: { es: "Estudios de grabación", en: "Recording studios" },
      place: { es: "Maracaibo", en: "Maracaibo" },
      points: {
        es: [
          "<strong>CUBOSTUDIO</strong> (2004–2006): ingeniero de grabación para Voz Veis, Tecupae, Vocal Song, Neguito Borjas, Gran Coquivacoa, Bacanos, Chande, Mario Cáceres y Argenis Carruyo.",
          "<strong>Grabaciones “Gilberto Ferrer”</strong> (2004–2006): acondicionamiento acústico, grabación, mezcla y mastering (Cardenales del Éxito, Tecupae, Argenis Carruyo).",
          "<strong>Rumba-Ya Estudio</strong> (2000–2006): técnico de grabación y asistente de mezcla y mastering (Orquesta Sinfónica del Zulia, Orquesta Sinfónica de Maracaibo, UNICA, Vocal Song)."
        ],
        en: [
          "<strong>CUBOSTUDIO</strong> (2004–2006): recording engineer for Voz Veis, Tecupae, Vocal Song, Neguito Borjas, Gran Coquivacoa, Bacanos, Chande, Mario Cáceres and Argenis Carruyo.",
          "<strong>Grabaciones “Gilberto Ferrer”</strong> (2004–2006): acoustic treatment, recording, mixing and mastering (Cardenales del Éxito, Tecupae, Argenis Carruyo).",
          "<strong>Rumba-Ya Estudio</strong> (2000–2006): recording technician and mixing & mastering assistant (Zulia Symphony Orchestra, Maracaibo Symphony Orchestra, UNICA, Vocal Song)."
        ]
      }
    },
    {
      period: { es: "1998 – 2008", en: "1998 – 2008" },
      role: { es: "Docencia Musical y Dirección Artística", en: "Music Teaching & Artistic Direction" },
      org: { es: "Instituciones educativas y musicales", en: "Educational & music institutions" },
      place: { es: "Maracaibo", en: "Maracaibo" },
      points: {
        es: [
          "<strong>Ministerio de Educación y Deportes, INCZ “Ciudad de Dios”</strong> (2005–2008): profesor especialista en el área de música.",
          "<strong>Escuela de Música “La Cruz”</strong> (2001–2003): profesor y director de la cátedra de teclado.",
          "<strong>Primera Iglesia Cristiana del Evangelio Completo</strong> (1998–2000): director musical de la banda residente y la coral, y coordinación técnica de sonido en vivo (PA y monitores)."
        ],
        en: [
          "<strong>Ministry of Education and Sports, INCZ “Ciudad de Dios”</strong> (2005–2008): music specialist teacher.",
          "<strong>“La Cruz” Music School</strong> (2001–2003): teacher and head of the keyboard department.",
          "<strong>Primera Iglesia Cristiana del Evangelio Completo</strong> (1998–2000): musical director of the resident band and choir, and live sound coordination (PA & monitors)."
        ]
      }
    }
  ],

  /* ---------------------------------------------------------------------
     Créditos destacados (portafolio)
     --------------------------------------------------------------------- */
  featured: [
    {
      tag: { es: "Premio Arpa", en: "Arpa Award" },
      title: "EXP — “Otra Historia”",
      text: {
        es: "Productor e ingeniero del álbum ganador del Premio Arpa a mejor álbum de rock cristiano.",
        en: "Producer and engineer of the album that won the Arpa Award for best Christian rock album."
      },
      accent: "violet"
    },
    {
      tag: { es: "TV · Venevisión", en: "TV · Venevisión" },
      title: "EXP — “Déjame Amarte”",
      text: {
        es: "Grabación y producción del tema para la telenovela La Mujer Perfecta.",
        en: "Recording and production of the song for the telenovela La Mujer Perfecta."
      },
      accent: "cyan"
    },
    {
      tag: { es: "Álbum póstumo", en: "Posthumous album" },
      title: "Will Márquez",
      text: {
        es: "Ingeniería de grabación, mezcla y producción del álbum póstumo del artista.",
        en: "Recording engineering, mixing and production of the artist’s posthumous album."
      },
      accent: "magenta"
    },
    {
      tag: { es: "Orquestal", en: "Orchestral" },
      title: { es: "Orquestas Sinfónicas del Zulia y Maracaibo", en: "Zulia & Maracaibo Symphony Orchestras" },
      text: {
        es: "Técnico de grabación y asistente de mezcla y mastering en Rumba-Ya Estudio.",
        en: "Recording technician and mixing & mastering assistant at Rumba-Ya Estudio."
      },
      accent: "cyan"
    }
  ],

  /* Artistas y agrupaciones con los que ha trabajado */
  artists: [
    "EXP", "Robert Vivo", "Janeth Swanson", "Eduardo Parra", "Gran Radio Riviera", "Everything Flow",
    "Will Márquez", "Raymond Furre", "Andrew Simar", "Avar", "Calle Santiago", "Ni3Al",
    "Argenis Carruyo", "GeneraSion", "Selah", "ExpanZion", "Adriana Belandria", "Pasaporte",
    "Voz Veis", "Tecupae", "Vocal Song", "Neguito Borjas", "Gran Coquivacoa", "Bacanos",
    "Chande", "Mario Cáceres", "Cardenales del Éxito", "Orquesta Sinfónica del Zulia",
    "Orquesta Sinfónica de Maracaibo", "UNICA"
  ],

  /* ---------------------------------------------------------------------
     ESCUCHA — reproductores de audio / vídeo
     Pega aquí enlaces normales de YouTube, Spotify o SoundCloud.
     Se convierten automáticamente en reproductores. Ejemplos:
       { url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", title: { es: "Videoclip", en: "Music video" } },
       { url: "https://open.spotify.com/album/XXXXXXXXXXXXXXXX", title: { es: "Otra Historia", en: "Otra Historia" } },
       { url: "https://soundcloud.com/usuario/tema", title: { es: "Mezcla", en: "Mix" } },
     Mientras la lista esté vacía, se mostrará un aviso de "Próximamente".
     --------------------------------------------------------------------- */
  media: [
    {
      year: "2014",
      url: "https://soundcloud.com/robertvivomusic/puro-amor",
      title: { es: "Robert Vivo — “Puro Amor”", en: "Robert Vivo — “Puro Amor”" },
      role: { es: "Sencillo", en: "Single" }
    },
    {
      year: "2010",
      url: "https://open.spotify.com/intl-es/album/6lb7tRV1tAuxR34JqO4L0R",
      title: { es: "EXP — “Otra Historia”", en: "EXP — “Otra Historia”" },
      role: { es: "Álbum completo", en: "Full Album" }
    }
  ],

  /* ---------------------------------------------------------------------
     Formación académica y certificaciones
     --------------------------------------------------------------------- */
  education: [
    {
      year: "2003",
      title: { es: "Licenciado en Música, Mención Musicología", en: "Bachelor’s Degree in Music, Musicology" },
      org: "Universidad Católica Cecilio Acosta (UNICA) · Maracaibo"
    },
    {
      year: "1995",
      title: { es: "Programador Analista Técnico en Computación", en: "Technical Programmer Analyst in Computing" },
      org: "CEDIC"
    }
  ],

  certifications: [
    { year: "2019", title: "Logic Pro, Audio Engineer & Post-Production", org: "LinkedIn Learning" },
    { year: "2018", title: "Music Production, Audio Engineering & Songwriting", org: "LinkedIn Learning" },
    { year: "2018", title: "Become a Mix Engineer – Pro Tools", org: "LinkedIn Learning" },
    { year: "2014", title: { es: "Seminario ¿Cómo Suena?", en: "¿Cómo Suena? Seminar" }, org: { es: "con Thomas Juth y Gabriel Millan", en: "with Thomas Juth & Gabriel Millan" } },
    { year: "2009", title: { es: "Seminario de Sonido Profesional", en: "Professional Sound Seminar" }, org: { es: "con Koke Wiedmaier", en: "with Koke Wiedmaier" } },
    { year: "1997", title: { es: "Técnicas de interpretación e improvisación del canto", en: "Vocal performance & improvisation techniques" }, org: { es: "con Max Alliey", en: "with Max Alliey" } },
    { year: "1996", title: { es: "Clases Magistrales de Guitarra Clásica", en: "Classical Guitar Masterclasses" }, org: "Proyecto Cultural MAVESA · AZUGUICLA" }
  ]
};
