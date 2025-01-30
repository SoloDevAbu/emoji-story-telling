import React, { useState } from 'react';
import Navbar from './Navbar';
import InputBox from './components/InputBox';
import StorySpace from './components/StorySpace';
import { Client } from "@gradio/client";

const App = () => {
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);


  const handleGenerateStory = async (emojiInput) => {
    if (emojiInput.trim() === '') return;
    
    setStory('');
    setLoading(true);
    try {
      const client = await Client.connect(import.meta.env.VITE_HUGGING_FACE_USER);
    
      const result = await client.predict("/chat", {
        message: emojiInput,
        system_message: "You are a friendly Chatbot and generate a creative short story based on Emojis.",
        max_tokens: 150,
        temperature: 0.7,
        top_p: 0.9
      });
      const response = result.data;
      setStory(response);
      console.log(response);
      console.log(typeof response);
  
      const responseText = response.text || response.toString();
      const words = responseText.split(" ");
      for (let i = 0; i < words.length; i++) {
        setTimeout(() => {
          setStory((prev) => prev + " " + words[i]);
        }, i * 50);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  
  };
  
  

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex-grow flex items-center justify-center p-4'>
        {!story && !loading ? (
          <InputBox onGenerate={handleGenerateStory} centered />
        ) : (
          <div className='w-full flex flex-col items-center'>
            <StorySpace story={story} loading={loading} />
            <InputBox onGenerate={handleGenerateStory} fixedBottom />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
