function DisplayData()
{
    // fetch our JSON Data
    fetch('data.json')
    .then(response => response.json())
    .then(

            data => {
                // create a reference to our display div
                const displayDiv = document.getElementById("display");
                // iterate through our JSON data, all display code goes inside here.
                data.forEach(
                    jsonObject => {
                        // create our div element for each monster object
                        const div = document.createElement('div');
                        div.classList.add('display');
                        const content = `
                            <h1>${jsonObject.item}</h1>
                            <h2><strong>Class: </strong>${jsonObject.objectclass}</h2>
                            <p><strong>Description: </strong>${jsonObject.Discription}</p>
                            <p><strong>Containtment:</strong>${jsonObject.containtment}</p>
                            <button onclick="speakText('${jsonObject.Discription}')">Read Description</button>
                            
                        `;

                        div.innerHTML = content;
                        displayDiv.appendChild(div);
                    }
                );
            }


    )
    .catch(error => console.error("Error fetching and displaying data: ", error))
}

function speakText(text)
{
    // Create a new SpeechSynthesis Utterance object
    const speech = new SpeechSynthesisUtterance();
    // set the text to be spoken
    speech.text = text;
    // set voice
    speech.voice = speechSynthesis.getVoices()[0];
    // speak the text
    speechSynthesis.speak(speech);
}

