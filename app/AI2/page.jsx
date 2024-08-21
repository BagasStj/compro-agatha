"use client";
import Image from 'next/image';
import React from 'react';
import SidebarMenuRight from './SidebarMenuR'; // Ensure the path is correct

export default function PhoneAI() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 mx-4 p-4"> {/* Main content */}
        {/* Hero Section */}
        <section id="home" className="p-8 bg-transparent mt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold">AI Phone</h1>
            <p className="mt-10 text-lg">
            The AI ​​Phone Call feature in Agatha AI allows users to communicate with the virtual assistant via phone call. 
            This feature is designed to provide ease in interacting with AI, whether to get information, perform certain tasks, or simply have an automated conversation. 
            Users can also set special prompts or instructions that will be executed by AI during the call           
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
              src="/phone1.svg"
              alt="Accessing AI Chart"
              width={900}
              height={300}
              className="mt-9"
            />
            <p className="mt-10 text-lg">
            In the AI Phone feature, there are two menus including the &quot;AI Assistant Call&quot; and &quot;Phone Number Call&quot; menus. 
            For an explanation of its use, see below.
            </p>

          </div>
        </section>

        {/* Guide Section */}
        <section className="p-8 bg-transparent mt-2"> {/* Adjust margin-top for closer positioning */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold">Guide to using the AI Phone Feature in Agatha AI</h2>
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
            <div id="guide" className="mt-4 space-y-6"> {/* Adjust spacing as needed */}
              <div className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>Accessing the AI Phone Feature</li>
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
                  <li><strong>Navigate to Ai Phone: </strong> On the home page, look for the AI Phone menu or icon in the navigation or dashboard.</li>
                </ol>
                <Image
                  src="/phone2.svg"
                  alt="Accessing AI Chart"
                  width={850}
                  height={300}
                  className="mt-4"
                />
              </div>

              <div id="how-to-use" className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>How to Use the AI Phone Feature</li>
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
                <Image
                src="/phone3.svg"
                alt="Accessing AI Chart"
                width={900}
                height={300}
                className="mt-9"
                />
                <div id="assistant"></div>
                <p id="assitant" className="text-lg mt-5"><strong className="text-xl">AI Phone Assistant Menu: </strong>In this menu, users can set the commands and voices of the AI 
                they want to run. In this feature, users can talk to AI via Telephone.</p>
                <ol className="list-decimal pl-10 mt-5 text-lg list-item-bold">
                  <li><strong>First Message: </strong>Create opening words in the chat, such as &quot;hello, how can i help you?&quot;.</li>
                  <li><strong>System Prompt: </strong>Write a description of the Ai&apos;s&apos; role, for example &quot;can it act as a reliable programmer&quot;.</li>
                  <li><strong>Voice: </strong>Choose what kind of voice intonation they want, there are seven different intonations and voice styles.</li>
                  <li><strong>Provide: </strong>Choose which provider they want to use.(OpenAI,Anthropic)</li>
                  <li><strong>Model: </strong>To select the machine model he wants to use</li>
                  <li><strong>Temperature: </strong>Measuring AI awareness, the higher the number the more random the answers generated</li>
                  <li><strong>Maximum Token: </strong>The maximum number of token that can be generated by the AI token is a collection of all sentences / words / characters</li>
                  <li><strong>Call: </strong>Run a call</li>
                </ol>
              </div>

              <div id="number" className="p-6 rounded-lg bg-transparent">
              <Image
                src="/phone4.svg"
                alt="Accessing AI Chart"
                width={900}
                height={300}
                className="mt-1"
                />
                <p  className="text-lg mt-5"><strong className="text-xl">AI Phone Number Call: </strong>In this menu, users can set prompts and messages that the AI will then use to call the intended number.</p>
                <ol className="list-decimal pl-10 mt-5 text-lg list-item-bold">
                  <li><strong>Assistant Name: </strong>Create a name to the AI in the call.</li>
                  <li><strong>First Message: </strong>Create a message or word for AI to answer when the caller picks up</li>
                  <li><strong>Voice: </strong>Choose what kind of voice intonation they want, there are seven different intonations and voice styles.</li>
                  <li><strong>Model: </strong>To select the machine model he wants to use</li>
                  <li><strong>Temperature: </strong>Measuring AI awareness, the higher the number the more random the answers generated</li>
                  <li><strong>End Call Message: </strong>Create a closing message after finishing communicating with the caller.</li>
                  <li><strong>Number Setting: </strong>In this section you can add the name and contact number you want to contact</li>
                  <li><strong>Call: </strong>Run a call</li>
                  <li><strong>History Call: </strong>Display call history.</li>
                </ol>

                </div>

              <div id="usage-tips" className="p-6 rounded-lg bg-transparent">
                <ul className="list-disc pl-6 text-2xl font-bold">
                  <li>Usage Tips</li>
                </ul>
                <ul className="list-decimal list-item-bold pl-10 mt-5 text-lg">
                  <li><strong>Prompt Clarity: </strong>Make sure you provide a clear and specific prompt before starting the call to get optimal results.</li>
                  <li><strong>Natural Conversation: </strong>While the AI can respond well, try to speak clearly and slowly so that the AI can process and respond correctly.</li>
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
