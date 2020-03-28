document.addEventListener('DOMContentLoaded', init)

function init(){
    const seedData = [
        { city_name: 'Edinbrugh', 
        continent_name: 'Europe', 
        population: 586000, 
        currency: 'gbp',
        },
        { city_name: 'New York', 
        continent_name: 'North America', 
        population: 8700000, 
        currency: 'usd',
        },
        { city_name: 'Hong Kong', 
        continent_name: 'Asia', 
        population: 7392000, 
        currency: 'hkd',
        }
    ];

        const cityList = document.querySelector('#city_list')
        const newItemForm = document.querySelector('#new_city_form');

            seedData.forEach( (city) => {
            attachCity(city, cityList);
    });


newItemForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const newCity = {
      city_name: this.city_name.value,
      continent_name: this.continent_name.value,
      population: this.population.value,
      currency: this.currency.value
    }
    attachCity(newCity, cityList);
    event.target.reset();
  })

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAll);

};


function attachCity(city, list){
    const newCity = document.createElement('li');
    newCity.classList.add('city-list-item');
    list.appendChild(newCity);

    const city_name = document.createElement('h3');
    city_name.textContent = `${city.city_name}`;
    newCity.appendChild(city_name);

    const continent_name = document.createElement('p');
    continent_name.textContent = `${city.continent_name}`;
    newCity.appendChild(continent_name);

    const population = document.createElement('p');
    population.textContent = `${city.population}`;
    newCity.appendChild(population);

    const currency = document.createElement('p');
    currency.textContent = `${city.currency.toUpperCase()}`;
    newCity.appendChild(currency);
    
};

const handleDeleteAll = function(){
    const cityList = document.querySelector('#city_list'); 
    cityList.innerHtml = '';
};
