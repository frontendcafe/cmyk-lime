import { useState, useEffect } from 'react';

import styles from '../../styles/Audio.module.css';
import { supabase } from './supabase';

export default function AudioPage() {
  const [playing, setPlay] = useState(false);
  const [dataSet, setData] = useState('');
  const [audioString, setAudioString] = useState('Play Audio');

  useEffect(() => {
    // Fetch Sound.mp3 de supabase storage
    async function handleStorage() {
      const { data, error } = await supabase.storage
        .from('audio')
        .createSignedUrl('public/sound.mp3', 120);

      const soundUrl = data.signedURL;
      setData(soundUrl);
    }
    handleStorage();
  }, []);

  // Pause y Play & texto
  function handleAudio() {
    const audioRef = useRef()
    if (!playing) {
      audioDiv.play();
      setPlay(true);
      setAudioString('Pause Audio');
    } else {
      audioDiv.pause();
      setPlay(false);
      setAudioString('Play Audio');
    }
  }

  return (
    <body className={styles.body}>
      {dataSet ? (
        <div className={styles.audio__page}>
          <button className={styles.playButton} onClick={handleAudio}>
            {audioString}
          </button>
          <audio controls autoplay ref={audioRef}>
            <source src={dataSet} type="audio/mpeg"></source>
          </audio>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </body>
  );
}
