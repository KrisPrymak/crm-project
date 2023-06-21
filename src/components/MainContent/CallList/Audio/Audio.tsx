import React, { useEffect, useState } from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import style from './Audio.module.css';

interface AudioProps {
    time: string
    record: string
    partnership_id: string
}
 
let audioContext = new AudioContext();
let playsound: any = audioContext.createBufferSource();
let audio: any = '';
    
const Audio: React.FC<AudioProps> = ({ time, record, partnership_id }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch(`https://api.skilla.ru/mango/getRecord?record=${record}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer testtoken',
            },
        })
            .then((data) => data.arrayBuffer())
            .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
            .then((decodedAudio) => {
                audio = decodedAudio;
            })
            .catch((error) => console.log(error.message));
    }, [record]);

    const toPlayAudio = () => {
        isPlaying && toStopAudio();
        playsound.buffer = audio;
        playsound.connect(audioContext.destination);
        playsound.start(audioContext.currentTime);
        setIsPlaying(true);
    };

    const toStopAudio = () => {
        playsound.stop(audioContext.currentTime);
        setIsPlaying(false);
        audioContext = new AudioContext();
        playsound = audioContext.createBufferSource();
    };

    return (
        <div className={style.container}>
            <span className={style.time}>{time}</span>
            {isPlaying ?
                <button className={style.playbutton} onClick={toPlayAudio}>
                    <PauseRoundedIcon className={style.iconpause} />
                </button>
                :
                <button className={style.playbutton} onClick={toStopAudio}>
                    <PlayArrowRoundedIcon className={style.iconplay} />
                </button>
            }
            <span className={style.playrow}></span>
        </div>
    );
};

export default Audio;