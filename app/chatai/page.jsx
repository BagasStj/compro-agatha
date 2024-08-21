"use client";
import Image from 'next/image';
import React from 'react';
import SidebarMenuRight from './SidebarMenuR'; // Ensure the path is correct

export default function ChatAI() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 mx-4 p-4"> {/* Main content */}
        {/* Hero Section */}
        <section id="home" className="p-8 bg-transparent mt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold">AI Chat</h1>
            <p className="mt-10 text-lg">
              An AI Chat is an advanced tool designed to assist in various tasks related to data visualization and analysis using artificial intelligence. It can automatically generate charts based on data inputs, making it a powerful feature for data-driven projects. The AI Chart can be utilized in numerous industries where data visualization is crucial, including finance, marketing, and research.
            </p>
            <img
              src="/elipse.svg"
              alt="Lingkaran Detail"
              className="absolute"
              style={{
                top: '70%',
                right: '5%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 1,
              }}
            />
            <Image
              src="/AI-chart.png"
              alt="Accessing AI Chart"
              width={900}
              height={300}
              className="mt-9"
            />
          </div>
        </section>

        {/* Guide Section */}
        <section id="guide" className="p-8 bg-transparent mt-2"> {/* Adjust margin-top for closer positioning */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold">Guide to using the AI Chart Feature in Agatha AI</h2>
            <img
              src="/elipse2.svg"
              alt="Lingkaran Detail"
              className="absolute"
              style={{
                top: '150%',
                right: '91%',
                width: '700px',
                height: '700px',
                transform: 'translate(50%, -50%)',
                zIndex: 0,
              }}
            />

            {/* Feature Section */}
            <div className="mt-4 space-y-6"> {/* Adjust spacing as needed */}
              <div className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>Accessing the AI Chart Feature</li>
                </ul>
                <ol className="list-decimal pl-10 mt-5 text-lg list-item-bold">
                  <li><strong>Open Website: </strong> Access the Agatha Ai website through your browser by visiting&nbsp; 
                    <a
                      href="https://agatha-ai-vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      https://agatha-ai-vercel.app
                    </a>.
                  </li>
                  <li><strong>Login to Your Account: </strong> If you are not logged in, click the Login button in the top right corner of the page, and enter your credentials.</li>
                  <li><strong>Navigate to Ai Chat: </strong> On the main page, find the AI Chat menu or icon in the navigation or dashboard section.</li>
                </ol>
                <Image
                  src="/img-2.svg"
                  alt="Accessing AI Chart"
                  width={850}
                  height={300}
                  className="mt-4"
                />
              </div>

              <div id="how-to-use" className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>How to Use the AI Chat Feature</li>
                </ul>
                <img
                src="/elipse.svg"
                alt="Lingkaran Detail"
                className="absolute"
                style={{
                    top: '280%',
                    right: '5%',
                    width: '700px',
                    height: '700px',
                    transform: 'translate(50%, -50%)',
                    zIndex: 1,
                }}
                />
                <ol className="list-decimal pl-10 mt-5 text-lg list-item-bold">
                  <li><strong>Starting a Conversation: </strong>Once you enter the AI Chat page, you will see a chat box on the screen. Type your question or statement in the text box provided.</li>
                  <li><strong>Sending a Message: </strong>Press the Enter key or click the Send button to send your message. The AI will respond within a few seconds.</li>
                  <li><strong>Viewing a Conversation History: </strong>All ongoing conversations will appear in the chat box. You can scroll up to see previous chat history, and prompt history on the left.</li>
                </ol>
              </div>

              <div id="custom" className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>How to Use Custom Prompt</li>
                </ul>
                <Image
                  src="/img-3.svg"
                  alt="Generated Prompt"
                  width={800}
                  height={300}
                  className="mt-4"
                />
                <p className="text-lg mt-5">
                  To set a prompt, you can click the button next to &quot;New Chat&quot;, then select &quot;Add new Prompt&quot; and set the prompt.
                </p>  
                <div style={{ display: 'flex' }} className="mt-8 image-container">
                  <Image
                    src="/custom-1.svg"
                    alt="Generated Prompt"
                    width={450}
                    height={300}
                    className="image-item"
                  />
                  <Image
                    src="/custom-2.svg"
                    alt="Generated Prompt"
                    width={480}
                    height={300}
                    className="image-item"
                  />
                </div>
                <ol className="list-decimal pl-10 mt-5 text-lg list-item-bold">
                  <li><strong>Title: </strong>Add title to prompt.</li>
                  <li><strong>Prompt: </strong>To set the AI to respond according to what is ordered.</li>
                  <li><strong>Model: </strong>Select the engine model used.</li>
                  <li><strong>Temperature: </strong>Measuring AI awareness, the higher the number the more random the answers generated.</li>
                  <li><strong>Top P: </strong>How accurate in AIR must choose the most relevant word for the answer.</li>
                  <li><strong>Max Token: </strong>The maximum number of tokens that can be generated by the AI; tokens are collections of sentences/words/characters.</li>
                  <li><strong>Presence Penalty & Frequency Penalty: </strong>Set the model so it doesn&apos;t use the same words too often.</li>
                </ol>
              </div>

              <div id="usage-tips" className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>Usage Tips</li>
                </ul>
                <ul className="list-decimal list-item-bold pl-10 mt-5 text-lg">
                  <li><strong>Specific Question: </strong>Try to provide clear and specific questions or instructions to get more accurate answers.</li>
                  <li><strong>Supported Languages: </strong>You can communicate in multiple languages, but best results are usually obtained when using English or Indonesian.</li>
                </ul>
                <img
                src="/elipse2.svg"
                alt="Lingkaran Detail"
                className="absolute"
                style={{
                    top: '400%',
                    right: '91%',
                    width: '700px',
                    height: '700px',
                    transform: 'translate(50%, -50%)',
                    zIndex: 1,
                }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SidebarMenuRight />  {/* Right sidebar */}
    </div>
  );
}
