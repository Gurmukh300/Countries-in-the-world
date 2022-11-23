function showCountries() {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

  xhr.onload = function() {
    if (xhr.status == 200) {
      console.log('success')
      let countries = JSON.parse(this.response)
      console.log(countries)
      countries.forEach(country => {
        let country_table = document.getElementById('country_table')
        let tr_country = country_table.insertRow();
        let td_country_card = tr_country.insertCell()
        let td_country_image = tr_country.insertCell()

        const countryCard = document.createElement('div')
        countryCard.innerText = country.name.official
        td_country_card.appendChild(countryCard)

        const countryCardImage = document.createElement('img')
        countryCardImage.width = '20'
        countryCardImage.src = country.flags.png
        td_country_image.appendChild(countryCardImage)
      })
    }
  }

  xhr.send()


}
