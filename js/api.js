
// Declaração das variáveis de paginação
 let allCountries = [];
 const countriesPerPage = 20;
 let currentPage = 1;

 // Inicio do evento, adicionando os elementos html dentro de variáveis constantes 
 document.addEventListener('DOMContentLoaded', () => {
     const countriesContainer = document.getElementById('countries');
     const searchInput = document.getElementById('search');
     const regionFilter = document.getElementById('regionFilter');
     const paginationContainer = document.getElementById('pagination');
     const subregion = document.getElementById('subregion');

     
    
    
    
    // Utilização do fetch para chamar a api RESTCountries, e tratamento de erros.
    
    fetch('https://restcountries.com/v3.1/all')
         .then(response => response.json())
         .then(data => {
             allCountries = data;
             updateDisplay();
         })
         .catch(error => {
             console.error('Erro ao buscar dados dos países:', error);
             countriesContainer.innerHTML = '<p>Erro ao carregar os dados dos países.</p>';
         });

     searchInput.addEventListener('input', updateDisplay);
     regionFilter.addEventListener('change', updateDisplay);
     subregion.addEventListener('change', updateDisplay);
     







    // Função que exibe as informações dos paises da tela, manipulando elementos html 
    function displayCountries(countries) {
         countriesContainer.innerHTML = '';
         countries.forEach(country => {
             const countryElement = document.createElement('div');
             countryElement.className = 'country';
             countryElement.innerHTML = `
                 <h2>${country.name.common}</h2>
                 <img src="${country.flags.png}" alt="Bandeira de ${country.name.common}">
                 <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                 <p><strong>População:</strong> ${country.population.toLocaleString()}</p>
                 <p><strong>Região:</strong> ${country.region}</p>
             `;
             countryElement.addEventListener('click', () => visitCountry(country.name.common));
             countriesContainer.appendChild(countryElement);
         });
     }

    
    

    // Função para atualizar os países, de acordo com os filtors de localidade e de digitação
     function updateDisplay() {
         const searchTerm = searchInput.value.toLowerCase();
         const selectedRegion = regionFilter.value;
         const selectedsubregion = subregion.value;
         

         const filteredCountries = allCountries.filter(country => {
             const matchesSearch = country.name.common.toLowerCase().includes(searchTerm);
             const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
             const matchessubregion = selectedsubregion === '' || country.subregion === selectedsubregion;
             
             
             return matchesSearch && matchesRegion && matchessubregion;

             
         });
         
   


         const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);
         currentPage = Math.min(currentPage, totalPages);

         const start = (currentPage - 1) * countriesPerPage;
         const end = start + countriesPerPage;
         const paginatedCountries = filteredCountries.slice(start, end);

         displayCountries(paginatedCountries);
         displayPagination(totalPages);
     
         
        }
        


        //Função que chama outra pagina onde sera exibida as informações dos paises, ao clicar em uma box do país, utilizando onClick() do html/js.
        function visitCountry(countryName) {
            if (countryName) {
                window.location.href = `/country/${encodeURIComponent(countryName)}`;
            } else {
                console.error('Country name is undefined or null');
            }
        }

     // Função para adicionar botões de paginações, e atualizar a tela.
    function displayPagination(totalPages) {
         paginationContainer.innerHTML = '';
         if (totalPages > 1) {
             for (let i = 1; i <= totalPages; i++) {
                 const button = document.createElement('button');
                 button.textContent = i;
                 button.addEventListener('click', () => {
                     currentPage = i;
                     updateDisplay();
                 });
                 if (i === currentPage) {
                     button.disabled = true;
                 }
                 paginationContainer.appendChild(button);
             }
        
        }

        

     }
 
 
});     
 
 

 




 
 
