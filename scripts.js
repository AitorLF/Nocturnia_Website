document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('team.csv')
    .then(response => response.text())
    .then(data => {
      Papa.parse(data, {
        header: true,
        complete: function(results) {
          const teams = results.data.map(record => {
            // Crear un nuevo objeto 'team' basado en cada registro del CSV
            const team = {
              name: record.name,
              job: record.job,
              link: record.link,
              image: record.image,
              descripcion: record.descripcion,
              
            };
            
            return team;
            
          });

          console.log(teams); // Mostrar todos los objetos creados
          const container = document.getElementById('csvContainer');
          teams.forEach(item => {
            // Crear un nuevo elemento div para cada equipo
            
            const newContainer = document.createElement('div');
            newContainer.classList.add('teamIndividual');
            
            // Añadir clase CSS al div
             // Crear un nuevo elemento img para la imagen del equipo
             const newImg = document.createElement('img');
             newImg.src = "./IMG/" + item.image; // Establecer la ruta de la imagen
             newImg.alt = "./IMG/profile.png"

             newImg.onerror = function() {
              this.onerror = null; // Evita un bucle infinito si la imagen predeterminada también falla
              this.src = './IMG/profile.png'; // Ruta a la imagen predeterminada
            };


            const newH1 = document.createElement('h3');
            newH1.textContent = `${item.name}`;


            const newP = document.createElement('p');
            newP.classList.add('Individual'); // Añadir clase CSS al div
            newP.textContent = `${item.job}`;

           

            // Añadir la imagen al div creado
            newContainer.appendChild(newImg);

            // Añadir el nuevo div (con la imagen dentro) al contenedor
            newContainer.appendChild(newH1);
            newContainer.appendChild(newP);
            container.appendChild(newContainer)

          });
        }
      });
    })
    .catch(err => {
      console.error('Error fetching CSV data:', err);
    });
});
  

