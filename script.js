document.addEventListener('DOMContentLoaded', () => {

    // === POP-UNDER AD LOGIC ===
    let popUnderTriggered = false; // Flag to ensure it runs only once
    function triggerPopUnder() {
        if (!popUnderTriggered) {
            const adScript = document.createElement('script');
            adScript.type = 'text/javascript';
            adScript.src = '//pl26215687.profitableratecpm.com/e0/b5/7c/e0b57c4018a26acff8c01bd6c5accd7f.js';
            document.body.appendChild(adScript);
            popUnderTriggered = true; // Set flag to true
            setTimeout(() => { if (document.body.contains(adScript)) { document.body.removeChild(adScript); } }, 5000);
        }
    }

    const generateBtn = document.getElementById('generateBtn');
    const videoTopicInput = document.getElementById('videoTopic');
    const outputElements = {
        titles: document.getElementById('titlesOutput'), description: document.getElementById('descriptionOutput'),
        hashtags: document.getElementById('hashtagsOutput'), keywords: document.getElementById('keywordsOutput')
    };

    generateBtn.addEventListener('click', () => {
        const topic = videoTopicInput.value.trim();
        if (topic === "") {
            alert("Please apne video ka topic likhein!"); return;
        }
        
        // Sirf pehle generate click par pop-under trigger hoga
        triggerPopUnder();

        generateTitles(topic);
        generateDescription(topic);
        generateHashtags(topic);
        generateKeywords(topic);
    });
    
    // Copy Button Logic (Robust and tested)
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.currentTarget.dataset.target;
            const textToCopy = document.getElementById(targetId).innerText;
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed'; textArea.style.top = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy'); button.innerText = 'Copied!';
            } catch (err) { button.innerText = 'Error'; } 
            finally {
                document.body.removeChild(textArea);
                setTimeout(() => { button.innerText = 'Copy'; }, 2000);
            }
        });
    });

    // --- UPDATED GENERATION FUNCTIONS WITH MORE CONTENT ---
    function generateTitles(topic) {
        const t = [
            `How To ${topic}: The Ultimate 2024 Guide`, `[Full Tutorial] ${topic.charAt(0).toUpperCase()+topic.slice(1)}`,
            `I Tried ${topic} For 7 Days - You Won't Believe The Results!`, `5 Secret Tips for the Perfect ${topic}`,
            `Stop Making These Mistakes With ${topic}!`, `The Only ${topic} Video You'll Ever Need`,
            `${topic} from Scratch | Complete Beginner's Guide`, `DIY ${topic} At Home | Cheap & Easy`,
            `The Hidden Truth About ${topic} [EXPOSED]`, `Watch This Before You Try ${topic}`
        ];
        outputElements.titles.innerHTML = t.join('\n');
    }
    function generateDescription(topic) {
        const d = `Is video mein humne aapko sikhaya hai ki aap aasani se "${topic}" kaise kar sakte hain. Humne har ek step ko detail mein cover kiya hai taaki aapko behtareen result mile.\n\n👇 VIDEO CHAPTERS 👇\n🕒 00:00 - Intro\n🕒 01:20 - Zaroori Cheezein\n🕒 03:45 - Step-by-Step Walkthrough\n🕒 08:10 - Common Mistakes to Avoid\n🕒 09:30 - Pro Tips for Best Results\n\n agar aapko yeh video pasand aayi ho to please LIKE karein aur channel ko SUBSCRIBE karna na bhoolein!\n👉 SUBSCRIBE: [Aapke Channel ka Link]\n\nFollow me on Social Media:\n📸 Instagram: [Aapka Instagram Link]\n👍 Facebook: [Aapka Facebook Link]\n\nThanks for your support!\n\n#${topic.split(' ').join('')} #HowTo #DIY #Tutorial #${topic.split(' ')[0]}Tips`;
        outputElements.description.innerText = d.trim();
    }
    function generateHashtags(topic) {
        const main_keyword = topic.split(' ')[0].toLowerCase();
        const words = topic.toLowerCase().split(' ');
        let h = new Set([
            `#${words.join('')}`, `#${main_keyword}`, `#${main_keyword}tutorial`, `#DIY${main_keyword}`, `#${main_keyword}guide`,
            '#tutorial', '#howto', '#guide', '#stepbystep', '#tipsandtricks', '#diyproject', '#youtubetips',
            '#learnonyoutube', '#viralvideo', '#trending', '#skilldevelopment'
        ]);
        outputElements.hashtags.innerText = Array.from(h).join(' ');
    }
    function generateKeywords(topic) {
        const k = new Set([topic, ...topic.toLowerCase().split(' '), `${topic} tutorial`, `learn ${topic}`, `how to make ${topic}`, `easy ${topic} guide`, `${topic} for beginners`, `best way to ${topic.split(" ").slice(1).join(" ")}`, `${topic} 2024`]);
        outputElements.keywords.innerText = Array.from(k).join(', ');
    }
});