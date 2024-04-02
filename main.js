const empanada = [
    {
      id: 1,
      nombre: "Empanada Arabe",
      precio: 1200,
      ingredientes: ["Carne", "Cebolla", "Limon"],
      imagen: "arabe.jpg",
    },
  
    {
      id: 2,
      nombre: "Empanada Fritas",
      precio: 1700,
      ingredientes: ["Carne", "Huevo duro", "Cebolla"],
      imagen: "fritas.webp",
    },
  
    {
      id: 3,
      nombre: "Empanada De Carne",
      precio: 1700,
      ingredientes: [
        "Carne",
        "Morron rojo",
        "Ajo",
        "Huevo duro",
        "Aceituna",
      ],
      imagen: "carne.avif",
    },
  
    {
      id: 4,
      nombre: "Jamon y Queso",
      precio: 600,
      ingredientes: ["Jamon" , "Queso"],
      imagen: "jamon-queso.jpg",
    },
  
    {
      id: 5,
      nombre: "Empanada de Pollo",
      precio: 600,
      ingredientes: ["Pollo", "Morron Rojo", "Morron verde"],
      imagen: "pollo.webp",
    },
  ];
  
  
  
  
  const inputNumber = document.getElementById ("input-number")
  const addForm = document.querySelector (".form")
  const card = document.querySelector(".container")
  
  
  
  const isValid = (input) => {
    let isValid = true
    const inputValue = input.value.trim ();
    if (!inputValue){
        card.innerHTML =
        ` 
        Error: No ingreso ningún número
        `
        isValid = false;
    }
  
    return isValid
  }
  
  
  
  const errorCard = () => {
    return ` 
    No hay mas empanadas
    `
  }
  
  
  
  const createCards = (empanada) => {
    return ` 
    <h4>${empanada.nombre}</h4>
        <img src= ${empanada.imagen}>
        <div class="container_info">
            <p>Precio</p>
            <span>$${empanada.precio}</span>
        </div>
    `
  }
  
  

  const saveLocalStorage = (empanada) => {
    localStorage.setItem('empanadaGuardada', JSON.stringify(empanada));
  }
  
  
 
  const renderCards = (empanada) => {
    const numberId = Number(inputNumber.value);
    const empanadaEncontrada = empanada.find (empanada => empanada.id === numberId)
    if (empanadaEncontrada){
      card.innerHTML = createCards(empanadaEncontrada);
      saveLocalStorage(empanadaEncontrada);
      return;
    }
    if (numberId > 5){
      card.innerHTML = errorCard()
      return;
    }
  }
  
  
  const addCard = (e) => {
    e.preventDefault ();
    isValid (inputNumber);
    renderCards (empanada);
  }
  
  
  const init = () => {
    addForm.addEventListener('submit', addCard);
  }
  
  init ();