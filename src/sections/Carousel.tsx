import "../styles/Carousel.css";

function Carousel() {
  const icons = [
    { name: "vscode", link: "https://code.visualstudio.com/" },
    { name: "linux", link: "https://www.linux.org/" },
    { name: "firefox", link: "https://www.mozilla.org/firefox/" },
    { name: "html5", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { name: "css3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "tailwindcss", link: "https://tailwindcss.com/" },
    { name: "sass", link: "https://sass-lang.com/" },
    { name: "javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "python", link: "https://www.python.org/" },
    { name: "react", link: "https://react.dev/" },
    { name: "flask", link: "https://flask.palletsprojects.com/" },
    { name: 'vitejs', link: "https://vite.dev/"},
    { name: "bootstrap", link: "https://getbootstrap.com/" },
    { name: "c", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { name: "cplusplus", link: "https://isocpp.org/" },
    { name: "canva", link: "https://www.canva.com/" },
    { name: "fastapi", link: "https://fastapi.tiangolo.com/" },
    { name: "typescript", link: "https://www.typescriptlang.org/" },
    { name: "nextjs", link: "https://nextjs.org/" },
    { name: "nodejs", link: "https://nodejs.org/" },
    { name: "git", link: "https://git-scm.com/" },
    { name: "github", link: "https://github.com/" },
  ];

  return (
    <div className="slider">
      <div className="list">
        {[...icons, ...icons].map((icon, index) => (
          <a
            key={index}
            className="item"
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-original.svg`}
              alt={`${icon.name} logo`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
