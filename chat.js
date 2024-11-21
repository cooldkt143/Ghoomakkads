document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('user-input');
  const sendButton = document.getElementById('send-btn');
  const chatMessages = document.getElementById('chat-messages');

  async function sendMessage() {
    const userInput = inputField.value.trim();
    if (userInput) {
      // Display user's message
      const userMessage = document.createElement('div');
      userMessage.textContent = userInput;
      userMessage.style.textAlign = 'right';
      chatMessages.appendChild(userMessage);

      // Clear the input field
      inputField.value = '';

      // Fetch AI response from OpenAI API
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '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' 
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userInput }]
          })
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // Display AI's message
        const aiMessage = document.createElement('div');
        aiMessage.textContent = aiResponse;
        aiMessage.style.textAlign = 'left';
        chatMessages.appendChild(aiMessage);

      } catch (error) {
        console.error('Error fetching AI response:', error);

        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Error: Unable to fetch AI response.';
        errorMessage.style.textAlign = 'left';
        chatMessages.appendChild(errorMessage);
      }

      // Scroll to the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  sendButton.addEventListener('click', sendMessage);

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
