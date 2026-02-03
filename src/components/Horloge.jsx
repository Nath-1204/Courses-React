import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets';

const Horloge = () => {

  // Etats pour les longueurs de pause et session
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  // Etats pour le minuteur
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  // Référence pour l'intervalle et l'audio
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  // Formater le temps en mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor( seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Gestion des longueurs avec limites
  const handleBreakChange = (increment) => {
    if(!isRunning) {
      const newLength = breakLength + increment;
      if(newLength >= 1 && newLength <= 60) {
        setBreakLength(newLength);
        if(!isSession) {
          setTimeLeft(newLength * 60);
        }
      }
    }
  }

  const handleSessionChange = (increment) => {
    if(!isRunning) {
      const newLength = sessionLength + increment;
      if(newLength >= 1 && newLength <= 60) {
        setSessionLength(newLength);
        if(isSession) {
          setTimeLeft(newLength * 60);
        }
      }
    }
  }

  // Démarrer/arrêter le minuteur
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  }

  // Réinitialiser le minuteur
  const resetTimer = () => {
    // Arrêter le minuteur
    if(timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Réinitialiser les états
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    setIsSession(true);
  
    // Arrêter et réinitialiser l'audio
    if(audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Gérer le compte à rebours
  useEffect(() => {
    if(isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if(prevTime <= 0) {
            audioRef.current.play();
            
            if(isSession) {
              setTimerLabel('Break');
              setIsSession(false);
              return breakLength * 60;
            } else {
              setTimerLabel('Session');
              setIsSession(true);
              return sessionLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, [1000]);
    } else if( timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      if(timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning, isSession, breakLength, sessionLength]);

  // Mettre à jour le titre de la page avec le temps restant
  useEffect(() => {
    document.title = `${formatTime(timeLeft)} - ${timerLabel} | Pomodoro Clock`;
  }, [timeLeft, timerLabel]);


  return (
    <div id='clock' className="items-center justify-center bg-[#c3cfe2] py-10 w-300 m-auto mt-5 gap-5 rounded-2xl">
      
      <header className="items-center justify-cente text-center">
        <h1 className='text-[#54a0ff] text-3xl font-medium'>Horloge </h1>
        <p className="text-[#636e72] font-semibold">Technique Pomodoro pour une productivité optimale.</p>
      </header>

      <main className='ml-2 mr-2 mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 top-5 gap-5'>
          {/** Contrôles pour la pause */}
          <div className="items-center border border-[#e9ecef] bg-[#f8f9fa] rounded-2xl hover:border-[#ff6b6b] transition-all gap-5">
            <div id='break-label' className='items-center text-[#4ecdc4] font-medium'>
              <h3 className='text-center text-2xl'>Durée de la pause</h3>
            </div>

            <div className='flex items-center justify-center gap-5'>
              <button 
                id='break-decrement' 
                className='px-4 py-3 rounded-xl border-none bg-[#2d3436] hover:bg-[#ff6b6b] text-white cursor-pointer'
                onClick={() => handleBreakChange(-1)}
                disabled={isRunning}
              > - </button>
              <div id="break-length" className='font-semibold text-xl text-[#54a0ff]'> 
                {breakLength} 
              </div>
              <button
                id='break-increment' 
                className='px-4 py-3 rounded-xl border-none bg-[#2d3436] hover:bg-[#ff6b6b] text-white cursor-pointer'
                onClick={() => handleBreakChange(1)}
                disabled= {isRunning}
              > + </button>
            </div>
            <div className='text-[#6c757d] text-center'>Minutes</div>
          </div>

          {/** Contrôles pour la session */}
          <div className="items-center border border-[#e9ecef] bg-[#f8f9fa] rounded-2xl hover:border-[#ff6b6b]">

            <div id='session-label' className='items-center font-medium text-[#4ecdc4]'>
              <h3 className='text-2xl text-center'>Durée de la session</h3>
            </div>

            <div className='flex items-center justify-center gap-5'>
              <button
                id='session-decrement'
                className='px-4 py-3 rounded-xl border-none bg-[#2d3436] hover:bg-[#ff6b6b] text-white cursor-pointer'
                onClick={() => handleSessionChange(-1)}
                disabled= {isRunning}
              > - </button>
              <div id='session-length' className='font-semibold text-xl text-[#54a0ff]'>
                {sessionLength}
              </div>
              <button
                id='session-increment'
                className='px-4 py-3 rounded-xl border-none bg-[#2d3436] hover:bg-[#ff6b6b] text-white cursor-pointer'
                onClick={() => handleSessionChange(1)}
                disabled={isRunning}
              > + </button>
            </div>
            <div className='text-[#6c757d] text-center'> Minutes</div>
          </div>

        </div>

        {/** Affichage du minuteur */}
        <div className="items-center border bg-[#ff6b6b] p-4 text-white rounded-xl mt-3 gap-5">
          <div className='text-[#4ecdc4] font-medium text-center text-2xl' id='timer-label'>
            {timerLabel}
          </div>
          <div className={`time-display ${timeLeft < 60 ? 'text-[#ff7675]' : 'text-white'} text-center text-2xl`} id='time-left'>
            {formatTime(timeLeft)}
          </div>

          {/** Contrôles du minuteur */}
          <div className="flex justify-center gap-5 flex-wrap">
            <button 
              className='items-center py-4 px-6 rounded-full border-none bg-[#2ecc71] text-white cursor-pointer transition-all' 
              id='start_stop' 
              onClick={toggleTimer}
            >
              <i className={`fas fa-${isRunning ? 'pause' : "play"}`}></i>
              {isRunning ? "Pause" : "Démarrer"}
            </button>
            <button 
              className='items-center py-4 px-6 bg-[#ff9f43] text-white border-none rounded-full cursor-pointer transition-all' 
              id='reset' 
              onClick={resetTimer}
            > 
              <i className='fas fa-redo'></i>
              Réinitialiser
            </button>
          </div>
        </div>

        {/** Indications */}
        <div className='bg-[#e3f2fd] rounded-xl border border-[#4ecdc4] pl-2 mt-5'>
          <h3 className='flex items-center text-[#2d3436]'>
            <i className='fas da-lightbulb'></i>
            Comment utiliser : 
          </h3>

          <ul className='text-[#2d3436] relative'>
            <li>✓ Configurer la durée de session (travail) et de la pause</li>
            <li>✓ Cliquez sur Démarrer pour lancer le minuteur</li>
            <li>✓ Travaillez pendant la session, et reposez-vous pendant la pause</li>
            <li>✓ Le minuteur alterne automatiquement entre la session et la pause</li>
          </ul>
        </div>
      </main>

      {/** Elément audio pour la sonnerie */}
      <audio src={assets.beep} id='beep' ref={audioRef} preload='auto' />
      
    </div>
  )
}

export default Horloge
