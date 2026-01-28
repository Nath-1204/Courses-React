import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './Markdown.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Markdown = () => {
  
  const [markdown, setMarkdown] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  // Texte Markdown par défaut avec les éléments requis 
  const defaultmarkdown = `# Titre Principal (H1)
  ## Sous-titre (H2)
  ### Voici quelques fonctionnalités du Markdown: 
  **Texte en gras** et *texte en italique*. 
  Vous pouvez également combiner ***les deux***. 
  
  [Un lien vers freeCodeCamp](https://wwww.freecodecamp.org)
  
  Code en ligne: \`console.log('Hello World')\`
  
  \`\`\`javascript 
  // Bloc de code avec coloration syntaxique
  function helloWorld() {
    console.log("Hello, Markdown Previewer!");
    return true;
  } 
  \`\`\`   
  
  - Element de liste 1
  - Element de liste 2
    - Sous-élément
    - Sous-élément
  - Element de liste 3
  
  1. Liste numérotée 1
  2. Liste numérotée 2
  3. Liste numérotée 3 
  
  > Une citation inspirante
  > Les retours à la ligne sont gérés
  > - Auteur Inconnu
  
  | Tableau   | Exemple   | Markdown  |
  |-----------|-----------|------------|
  | Colonne 1 | Données 1 |    ✓      |
  | Colonne 2 | Données 2 |    ✓      |
  | Colonne 3 | Données 3 |    ✓      |  
  
  ~~ Texte barré ~~ 
  Texte normal avec des retours à la ligne gérés. 
  Comme vous pouvez le voir, chaque nouvelle ligne
  est convertie en <br> automatique. 
  
  ---
  
  **Tips:**
  - Modifiez le texte dans l'éditeur à gauche
  - La prévisualisation se met à jour en temps réel
  - Utilisez la syntaxe Markdown standard`;

  // Initialiser avec le markdown par défaut
  useEffect(() => {
    setMarkdown(defaultmarkdown);
    updateCounts(defaultmarkdown);
  },[]);

  // Mettre à jour les compteurs
  const updateCounts = (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setCharCount(text.length);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setMarkdown(newValue);
    updateCounts(newValue)
  };

  const handleReset = () => {
    setMarkdown(defaultmarkdown);
    updateCounts(defaultmarkdown);
  };

  const handleClear = () => {
    setMarkdown("");
    updateCounts('');
  };

  // Composant pour le code avec coloration syntaxique
  const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'javascript';

      return !inline && match ? (
        <SyntaxHighlighter 
          style=""
          language={language}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div id='markdown' className='justify-center items-center m-auto w-300 mt-4 text-white border rounded-xl bg-gray-400 gap-5'>
      
      <header className='mb-5 text-center p-3'>
        <h1 className='text-[#6c63ff] flex items-center justify-center gap-5 font-medium text-3xl'>Prévisualisation Markdown </h1>
        <p className='text-[#666] font-semibold'>Editez le Markdown à gauche et voyez le résultat en temps réel à droite </p>
      </header>

      <main className='grid grid-cols-2 gap-6'>
        <div className="flex flex-col bg-[#ffffff] rounded-2xl ml-2 ">
          <div className="flex justify-between items-center text-white p-6 bg-[#6c63ff]">
            <h2 className='items-center gap-6 text-xl'>Editeur</h2>
          </div>
          <div className="flex text-black gap-6">
            <span className='items-center'>{wordCount} mots</span>
            <span className='items-center'>{charCount} caractères</span>
          </div>

          <textarea 
            id="editor"
            className='flex border-none h-full bg-[#1e1e2e] text-[#e0e0e0] transition-all'
            value={markdown}
            onChange={handleChange}
            placeholder='Ecrivez votre Markdown ici...' 
            autoFocus
          />
          <div className="flex bg-[#f8f9fa] p-6 gap-6">
            <button
              className='border-none rounded-xl px-5 py-5 text-white bg-[#4CAF50] hover:bg-[#3d8b40] cursor-pointer items-center gap-6 trasnition-all '
              onClick={handleReset}
            >
              Réinitialiser
            </button>
            <button
              className='border-none rounded-xl px-5 py-5 text-white bg-[#f44336] hover:bg-[#d32f2f] cursor-pointer items-center gap-6 trasnition-all'
              onClick={handleClear}
            >
              Effacer
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-[#ffffff] rounded-2xl mr-2">
          <div className="flex justify-between items-center text-white p-6 bg-[#6c63ff]">
            <h2 className='items-center gap-6 text-xl'>Prévisualisation</h2>
            <span className='bg-[#ff6b6b] text-white px-5 py-4'>HTML Live</span>
          </div>
          <div className="ml-2 mr-2 bg-[#ffffff] text-black" id='markdown-preview'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={CodeBlock}
            >
              {markdown || 'Commencez à écrire du Markdown à gauche...'}
            </ReactMarkdown>
          </div>
        </div>

      </main>

      <footer className=''>
        <div className="m-auto justify-center mt-2 items-center gap-6">
          <div className="pl-2 pr-2 pb-2">
            <h4 className='text-[#4a44c6] text-center text-2xl font-medium'>Guide rapide Markdown</h4>
            <div className="grid grid-cols-3">
              <div className='bg-[#f8f9fa] p-5 border rounded-xl  transition-all'>
                <code className='block bg-white text-[#d63384]'># Titre H1</code>
                <span className='text-[#666] font-semibold'>Titre principal</span>
              </div>
              <div className="bg-[#f8f9fa] p-5 border rounded-xl  transition-all">
                <code className='block bg-white text-[#d63384]'>## Titre H2</code>
                <span className='text-[#666] font-semibold'>Sous-titre</span>
              </div>
              <div className="bg-[#f8f9fa] p-5 border rounded-xl  transition-all">
                <code className='block bg-white text-[#d63384]'>**gras**</code>
                <span className='text-[#666] font-semibold'>Texte en gras</span>
              </div>
              <div className='bg-[#f8f9fa] p-5 border rounded-xl  transition-all'>
                <code className='block bg-white text-[#d63384]'>*italique*</code>
                <span className='text-[#666] font-semibold'>Texte en Italique</span>
              </div>
              <div className='bg-[#f8f9fa] p-5 border rounded-xl  transition-all'>
                <code className='block bg-white text-[#d63384]'>[lien](url)</code>
                <span className='text-[#666] font-semibold'>Lien hypertexte</span>
              </div>
              <div className='bg-[#f8f9fa] p-5 border rounded-xl transition-all'>
                <code className='block bg-white text-[#d63384]'>`code`</code>
                <span className='text-[#666] font-semibold'>Code en ligne</span>
              </div>
            </div>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default Markdown
