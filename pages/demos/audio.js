import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from '../../styles/Audio.module.css';

export default function AudioPage() {
  const [playing, setPlay] = useState(false);
  const [dataSet, setData] = useState('');
  const [audioString, setAudioString] = useState('Play Audio');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  useEffect(() => {
    // Fetch Sound.mp3 de supabase storage
    async function handleStorage() {
      const { data, error } = await supabase.storage
        .from('audio')
        .createSignedUrl('public/sound.mp3', 120);

      const soundUrl = data.signedURL;
      setData(soundUrl);
      console.log(soundUrl);
    }
    handleStorage();
  }, []);

  // Pause y Play & texto
  function handleAudio() {
    const audioDiv = document.querySelector('.videoAudio');
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
          <audio controls autoplay className="videoAudio">
            <source src={dataSet} type="audio/mpeg"></source>
          </audio>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </body>
  );
}
