document.getElementById('translate-btn').addEventListener('click', async () => {
    const text = document.getElementById('input-text').value;
    const lang = document.getElementById('target-lang').value;
    const output = document.getElementById('output-text');

    if (!text) return;

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`);
        const data = await response.json();
        output.innerText = data.responseData.translatedText;
    } catch (error) {
        output.innerText = "Error translating text.";
    }
});