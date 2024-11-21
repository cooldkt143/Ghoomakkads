document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('user-input');
  const sendButton = document.getElementById('send-btn');
  const chatMessages = document.getElementById('chat-messages');

  function sendMessage() {
    const userInput = inputField.value.trim();
    if (userInput) {
      // Display user's message
      const userMessage = document.createElement('div');
      userMessage.textContent = userInput;
      userMessage.style.textAlign = 'right';
      chatMessages.appendChild(userMessage);

      // Clear the input field
      inputField.value = '';

      // Simulate AI response
      setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.textContent = `AI Response to "${userInput}"`;
        aiMessage.style.textAlign = 'left';
        chatMessages.appendChild(aiMessage);

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);
    }
  }

  sendButton.addEventListener('click', sendMessage);

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});

// Replace 'your-api-key' with your OpenAI API key
const apiKey = "your-api-key";

// Function to send a prompt to ChatGPT
async function getChatGPTResponse(prompt) {
    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
    };

    const body = {
        model: "gpt-4", // Use "gpt-4" or "gpt-3.5-turbo"
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
        ],
        temperature: 0.7, // Adjust for creativity
        max_tokens: 300, // Adjust for response length
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error fetching ChatGPT response:", error);
        return "Error: Unable to fetch response from ChatGPT.";
    }
}

// Example usage
const prompt = "What is the capital of France?";
getChatGPTResponse(prompt).then((response) => {
    console.log("ChatGPT response:", response);
});
