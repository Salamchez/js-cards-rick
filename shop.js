const getItems = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const result = await response.json();
  return result.results;
};
getItems();

const cardRend = async () => {
  const charactersData = await getItems();
  console.log(charactersData); 
  const container = document.querySelector(".cards");
  console.log(container)
  charactersData.forEach((item) => {
   const {image, name, gender, species} = item
    container.innerHTML = container.innerHTML + `<div class='card'>
      <img src = ${image} style="width:150px;height:150px;border-radius:10px;">
      <h3>${name}</h3>
      <p>${gender}</p>
      <p>${species}</p>
    </div>`
    console.log(item.name)
  })



  // const rick = charactersData[0];
  // const {gender, name, species} = rick;
  // console.log(gender, name, species);
  // const container = document.querySelector(".cards");
  // container.innerHTML = `
  //   <div class='card'>
  //     <h3>${name}</h3>
  //     <p>${gender}</p>
  //     <p>${species}</p>
  //   </div>
  // `

}

// const renderCards = async () => {
//   const charactersData = await getItems();
//   console.log(charactersData);
// }
cardRend();