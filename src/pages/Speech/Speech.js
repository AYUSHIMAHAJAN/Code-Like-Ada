
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import {useState} from "react";
import './Speech.css';
import Genre from '../Genre';
import { Link } from 'react-router-dom';


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition,resetTranscript} = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>What's Your Mood Today?</h2>
                <br/>
                

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                
                    <button onClick={startListening}>Start Listening</button>
                  <Link to ="/Recommendations" state={{transcript:`${transcript}`}} style={{textDecoration:"none",listStyle:"none"}}><button onClick={SpeechRecognition.stopListening}>Stop Listening</button></Link> 
                  <button onClick={resetTranscript}>Reset</button>

                </div>

            </div>
    

        </>
    );
};

export default App;