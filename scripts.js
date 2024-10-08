
//CODIGO ScrollToTop
document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// script.js




//CODIGO EQUIPO
document.addEventListener("DOMContentLoaded", () => {
  fetch("team.csv")
    .then((response) => response.text())
    .then((data) => {
      Papa.parse(data, {
        header: true,
        complete: function (results) {
          const teams = results.data.map((record) => {
            // Crear un nuevo objeto 'team' basado en cada registro del CSV
            const team = {
              name: record.name,
              job: record.job,
              image: record.image,
              web1: record.web1,
              web2: record.web2,
              web3: record.web3,
              web4: record.web4,
              web5: record.web5,
              web6: record.web6,

            };

            return team;
          });
          const container = document.getElementById("csvContainer");
          teams.forEach((item) => {
            //DIV USUARIO
            const newContainer = document.createElement("div");
            newContainer.classList.add("teamIndividual");

            //IMAGEN DEL USUARIO
            const newImg = document.createElement("img");
            newImg.src = "./IMG/workers/" + item.image; // Establecer la ruta de la imagen
            newImg.alt = item.image;

            newImg.onerror = function () {
              this.onerror = null; // Evita un bucle infinito si la imagen predeterminada también falla
              this.src = "./IMG/workers/profile.png"; // Ruta a la imagen predeterminada
            };

            //NOMBRE
            const newH1 = document.createElement("h3");
            newH1.textContent = `${item.name}`;
            //PUESTO
            const newP = document.createElement("p");
            newP.classList.add("Individual"); // Añadir clase CSS al div
            newP.textContent = `${item.job}`;
            //WEBS

            // Añadir la imagen al div creado
            newContainer.appendChild(newImg);

            // Añadir el nuevo div (con la imagen dentro) al contenedor
            newContainer.appendChild(newH1);
            newContainer.appendChild(newP);

            const newDiv = document.createElement("div");
            newDiv.classList.add("containerLogos");

            newContainer.appendChild(newDiv);
 

            // Iterar sobre las imágenes y los enlaces
            for (let i = 0; i < 6; i++) {
              const link = document.createElement("a");
              link.target ="_blank"; 
              link.rel="noopener noreferrer";
              
              const currentWeb = item["web" + (i + 1)];
              // Accede a item.web1, item.web2, etc.

              if (currentWeb !== undefined) {
                const route = "./IMG/logos/";
                const newLogo = document.createElement("img");
                switch (true) {
                  case currentWeb.includes("linkedin"):
                    newLogo.classList.add("Linkedin");
                    link.classList.add("Linkedin");

                    newLogo.src = route + "linkedin.png";
                    newLogo.alt = "IN";

                    // Aquí puedes agregar la lógica específica para LinkedIn
                    break;

                  case currentWeb.includes("artstation"):
                    newLogo.classList.add("Artstation");
                    link.classList.add("Artstation");

                    newLogo.src = route + "artstation.png";
                    newLogo.alt = "A";
                    break;

                  case currentWeb.includes("github"):
                    newLogo.classList.add("Github");
                    link.classList.add("Github");

                    newLogo.src = route + "github.png";
                    newLogo.alt = "A";
                    // Aquí puedes agregar la lógica específica para GitHub
                    break;
                  case currentWeb.includes("youtube"):
                    newLogo.classList.add("Youtube");
                    link.classList.add("Youtube");

                    newLogo.src = route + "youtube.png";
                    newLogo.alt = "A";
                    // Aquí puedes agregar la lógica específica para GitHub
                    break;
                  case currentWeb.includes("instagram"):
                    newLogo.classList.add("Instagram");
                    link.classList.add("Instagram");

                    newLogo.src = route + "instagram.png";
                    newLogo.alt = "A";
                    // Aquí puedes agregar la lógica específica para GitHub
                    break;

                  default:
                    newLogo.classList.add("Webpropia");
                    link.classList.add("Webpropia");

                    newLogo.src = route + "website.png";
                    newLogo.alt = "W";

                    break;
                }

                newLogo.classList.add("Img");
                link.href = item["web" + (i + 1)];

                // Insertar la imagen dentro del enlace
                link.appendChild(newLogo);

                // Agregar el enlace (que contiene la imagen) al contenedor
                newDiv.appendChild(link);
              }
            }

            // Agregar el contenedor al elemento principal
            container.appendChild(newContainer);
          });
        },
      });
    })
    .catch((err) => {
      console.error("Error fetching CSV data:", err);
    });
});
