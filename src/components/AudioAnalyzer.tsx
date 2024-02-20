
import { useEffect } from 'react';

const AudioAnalyzer = () => {
  useEffect(() => {
    const audioContext = new (window.AudioContext || window.AudioContext)();
    const analyser = audioContext.createAnalyser();
    
      console.log(analyser)

    return () => {
      console.log('it works')
    };
  }, []);

  return <div>Web Audio Analyzer</div>;
};

export default AudioAnalyzer;