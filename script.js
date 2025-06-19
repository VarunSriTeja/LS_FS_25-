function checkGuess() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    const result = document.getElementById('resultText');
    if (input.includes("coding")) {
      result.textContent = "✅ Correct! Coding Club is my favorite!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Nope! Hint: It's about programming and logic!";
      result.style.color = "red";
    }
  }
  
  function updateTimeline() {
    const slider = document.getElementById('timelineSlider').value;
    const eventText = document.getElementById('timelineEvent');
    const events = {
      1: "📅 Aug 2023: Started at IIT Bombay",
      2: "🤖 Built Face Recognition using Siamese Networks",
      3: "📊 MNIST Classification with NetWeaver",
      4: "🛠️ Created a UTM at Makers Space",
      5: "🎭 Mood Indigo Informals Coordinator",
      6: "🏐 GC Volleyball and Kho Kho Player"
    };
    eventText.textContent = events[slider];
  }
  