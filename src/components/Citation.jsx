import React, { useEffect, useState } from 'react'

const Citation = () => {

  const [quote, setQuote] = useState({text: "", author: ""});

  // Liste de citations par défaut au cas où l'API échoue
  const defaultQuotes = [
    { text: "La vie est ce qui arrive quand on est occupé à faire d'autres projets.", author: "John Lennon" },
    { text: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.", author: "Nelson Mandela" },
    { text: "Sois le changement que tu veux voir dans le monde.", author: "Mahatma Gandhi" },
    { text: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
    { text: "Il n'y a qu'une seule chose qui puisse rendre un rêve impossible, c'est la peur d'échouer.", author: "Paulo Coelho" },
    { text: "Les seules limites à nos réalisations de demain, ce sont nos doutes d'aujourd'hui.", author: "Joseph Cooper"},
    { text: "Patience, persévérance et transpiration forment une combinaison imbattable pour le succès. ", author: "Napoleon Hill"},
    { text: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer"},
    { text: "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.", author: "Theodore Roosevelt"},
    { text: "Il y a une raison pour laquelle on a des rêves. C'est pour les réaliser.", author: "Christopher Gardner"}
  ];

  const fetchRandomQuotes = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if(response.success) {
        const data = await response.json();
        setQuote({
          text: data.content,
          author: data.author || "Auteur inconnu"
        })
      } else {
        throw new Error("API non disponible")
      }

    } catch (error) {
      const randomQuotes = Math.floor(Math.random() * defaultQuotes.length);
      setQuote(defaultQuotes[randomQuotes]);
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchRandomQuotes();
  }, []);

  const handleButton = () => {
    fetchRandomQuotes()
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;


  return (
    <div id='quote-box' className="items-center w-120 py-10 m-auto p-6 bg-gray-200 border border-gray-700 mt-4 rounded-2xl gap-5">
      
      <div id='text' className='text-center'>
        <p className="font-medium text-2xl text-[#667eea]">{quote.text}</p>
      </div>
      <div id="author">
        <h4 className='text-black text-right'> - {quote.author}</h4>
      </div>

      <div id='flex flex-wrap mt-3 items-center justify-center gap-6'>
        <a href={tweetUrl} id='tweet-quote' target='_blank' className='text-white py-3 px-5 bg-gray-500 cursor-pointer rounded-full'>Partager sur X</a> 
        <button id='new-quote' onClick={handleButton} className='text-white bg-[#1DA1F2] py-3 px-5 hover:bg-[#0d8bd9] cursor-pointer rounded-full transition-all mr-0'>Nouvelle Citation</button>
      </div>

    </div>
  )
}

export default Citation
