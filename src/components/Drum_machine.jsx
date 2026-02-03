import React, { useCallback, useEffect, useState } from 'react'

const Drum_machine = () => {

  const [displayText, setDisplayText] = useState('FCC Drum Machine');
  const [powerOn, setPowerOn] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentBank, setCurrentBank] = useState('heaterKit');

  // Definition des banques de sons
  const soundBanks = {
    heaterKit: [
      { key: "Q", id: 'Heater-1', name: 'Heater 1'},
      { key: "W", id: 'Heater-2', name: 'Heater 2'},
      { key: "E", id: 'Heater-3', name: 'Heater 3'},
      { key: "A", id: 'Heater-4', name: 'Heater 4'},
      { key: "S", id: 'Clap', name: 'Clap'},
      { key: "D", id: 'Open-HH', name: 'Open HH'},
      { key: "Z", id: 'Kick-n-Hat', name: 'Kick n\' Hat'},
      { key: "X", id: 'Kick', name: 'Kick'},
      { key: "C", id: 'Closed HH', name: 'Closed HH'},
    ],
    pianoKit: [
      { key: "Q", id: 'Chord-1', name: 'Chord 1'},
      { key: "W", id: 'Chord-2', name: 'Chord 2'},
      { key: "E", id: 'Chord-3', name: 'Chord 3'},
      { key: "A", id: 'Shaker', name: 'Shaker'},
      { key: "S", id: 'open-HH-2', name: 'Open HH 2'},
      { key: "D", id: 'Closed-HH', name: 'Closed HH 2'},
      { key: "Z", id: 'Punchy-Kick', name: 'Punchy Kick'},
      { key: "X", id: 'Side-Stick', name: 'Side Stick'},
      { key: "C", id: 'Snare', name: 'Snare'}, 
    ]
  };

  const [sounds, setSounds] = useState(soundBanks[currentBank]);

  // Gestion des touches du clavier
  const handlekeyPress = useCallback((e) => {
    if (!powerOn) return;

    const key = e.key.toUpperCase();
    const sound = sounds.find(s => s.key === key);

    if (sound) {
      playSound(sound);
    }
  }, [powerOn, sounds]);

  // Jouer un son
  const playSound = (sound) => {
    if (!powerOn) return;

    const audioElement = document.getElementById(sound.key);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play();
      setDisplayText(sound.name);
    }
  };

  // Changer de banque de sons
  const toggleBank = () => {
    const newBank = currentBank === 'heaterKit' ? 'pianoKit' : 'heaterKit';
    setCurrentBank(newBank);
    setSounds(soundBanks[newBank]);
    setDisplayText(newBank === 'heaterKit' ? 'Heater Kit' : 'Piano Kit')
  };

  // Gestion du volume
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setDisplayText(`Volume: ${Math.round(newVolume * 100)}%`);
    setTimeout(() => {
      if(displayText.includes('Volume:')) {
        setDisplayText('FCC Drum Machine');
      }
    }, 1000);
  };

  // Gestion de l'alimentation
  const togglePower = () => {
    setPowerOn(!powerOn);
    setDisplayText(!powerOn ? 'Power ON' : 'Power OFF');
  };

  // Effet pour écouter les touches du clavier
  useEffect(() => {
    document.addEventListener("keydown", handlekeyPress);
    return () => {
      document.removeEventListener("keydown", handlekeyPress);
    }
  }, [handlekeyPress]);

  return (
    <div id='drum-machine' className='py-10 m-auto border items-center justify-center mb-5 w-300 rounded-xl bg-gray-600'>
      <h2 className='text-white font-medium text-3xl text-center items-center mt-5'> FCC Drum machine</h2>
      <p className='text-center font-semibold mb-5 text-white'>Cliquez sur les pads ou utilisez votre clavier</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5'>
        <div className='ml-2'>
          <div className='grid grid-cols-3 sm:grid-cols-2'>
            {
              sounds.map((sound) => {
                <button 
                  key={sound.key}
                  className='flex items-center bg-[#6c63ff] px-5 py-5 border rounded-xl text-white font-bold cursor-pointer active:scale(0.95) transition-all'
                  id={`pad-${sound.key}`}
                  onClick={() => playSound(sound)}
                >
                  {sound.key}
                  <audio 
                    src=""
                    className=''
                    id={sound.key}
                  ></audio>
                </button>
              })
            }
          </div>
        </div>

        <div className='flex flex-col gap-6 mr-2'>
          <div id='display' className='flex items-center justify-center text-center bg-[#2a2a3c] text-[#4ecdc4] border border-[#4ecdc4] text-2xl py-5 font-medium' >
            {displayText}
          </div>

          <div className='bg-[#f8f9fa] p-8 rounded-xl border-l'>
            <div className=" flex items-center color-[#2a2a3c] font-medium mb-3">
              Power
            </div>
            <div className="flex gap-6">
              <button
                className={`flex border-none px-4 py-4 bg-[#e9ecef] color-[#6c757d] ${powerOn ? 'active bg-[#ff6b6b] color-white' : ''} cursor-pointer rounded-xl transition-all`}
                onClick={togglePower}
              >
                {powerOn ? 'ON' : "OFF"}
              </button>
            </div>
          </div>

          <div className='bg-[#f8f9fa] p-8 rounded-xl border-l'>
            <div className="flex items-center color-[#2a2a3c] font-medium mb-3">
              Volume
            </div>
            <input 
              type="range" 
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className='w-full h-5 outline-none rounded-2'
              disabled={!powerOn} 
            />
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-xl border-l">
            <div className="flex items-center color-[#2a2a3c] font-medium mb-3">
              Bank
            </div>
            <div className=" flex gap-6 ">
              <button
                className={`flex border-none px-4 py-4 bg-[#e9ecef] color-[#6c757d] ${currentBank === 'heaterKit' ? 'active bg-[#ff6b6b] color-white' : "" } cursor-pointer rounded-xl transition-all`}
                onClick={toggleBank}
                disabled={!powerOn}
              >
                Heater
              </button>
              <button
                className={`flex border-none px-4 py-4 bg-[#e9ecef] color-[#6c757d] ${currentBank === 'pianoKit' ? 'active bg-[#ff6b6b] color-white' : "" } cursor-pointer rounded-xl transition-all`}
                onClick={toggleBank}
                disabled={!powerOn}
              >
                Piano
              </button>
            </div>
          </div>

          <div className='bg-[#e3f2fd] p-6 border-l border-[#4ecdc4]'>
            <h4>Contrôles clavier: </h4>
            <div className="flex flex-wrap gap-5 mt-5">
              {sounds.map(sound => (
                <span key={sound.key} className='flex items-center justify-center px-3 py-3 font-bold text-white bg-[#2a2a3c] '>
                  {sound.key}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Drum_machine
