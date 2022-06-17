import React from 'react';
import './index.css';

function displayEmojiName(event){
    document.getElementById('open').style.display = "block";

    document.getElementById('show').innerHTML = (event.target.id);
}

function close(){
    document.getElementById('open').style.display = "none";
}

const emojis = [{
  emoji: '😀',
  name: 'ESTOU SUPER FELIZ!'
},
{
  emoji: '💃',
  name: 'POR ISSO NÃO PARO DE DANÇAR!'
},
{
  emoji: '🎉',
  name: 'HUMMMMM...'
}];

function Program(){
  const greeting = "greeting";
  const displayAction = false;

  return(
    <>
        <section className='main'>
            {displayAction && <p>I am writing JSX</p>}

            <ul>
                <h1 id={greeting}>Hello, World</h1>

                <div className='listOrder'>
                {
                    emojis.map(emoji => (
                    <li key={emoji.name}>
                        <button className='btn1' onClick={displayEmojiName}>
                            <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                        </button>
                    </li>
                    ))
                }
                </div>
            </ul>

            <div className='saidaDados'>
                <div id='open' className='open'>
                    <div id='show'></div>

                    <div className='botao'>
                        <button type="buttom" className="btn2" onClick={close}>OK</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Program;
