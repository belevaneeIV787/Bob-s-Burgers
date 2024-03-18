async function fetchCharacter(){
  try{
    const response = await fetch ('https://bobsburgers-api.herokuapp.com/')
    const data = await response.json()

    console.log(data)

    const allList  = document.getElementById('dados')
    allList.innerHTML = '';

    data.forEach(dados => {
      const card = document.createElement('div')
      card.classList.add('card')

      card.innerHTML = `
      <div><strong>Name:</strong> ${character.id}</div>
      `
      card.addEventListener('click', () => {
        window.location.href = `PaginaPersonagem.html?id=${character.dados}`
      })
      allList.appendChild(card)
    })
    console.log(data)

  }catch (error) {
    console.error('Erro ao carregar personagens', error)
  }
}

fetchCharacter