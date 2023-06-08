document.querySelector('#button').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#champName").value;
  const res = await fetch(`https://localhost:8000/api/${champName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#gender").innerText = data.gender
  document.querySelector("#ability").innerText = data.ability
  document.querySelector("#type").innerText = data.type
}