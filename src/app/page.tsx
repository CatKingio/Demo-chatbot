'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import { useChat } from 'ai/react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit, data } = useChat();
    return (
        <main className="flex-1 bg-gray-100 dark:bg-gray-800 py-8 px-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="h-[500px] flex flex-col">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                            <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
                                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                                {messages.map((m) => (
                                    <div key={m.id} className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
                                        <span>{m.role === 'user' ? 'User: ' : 'AI: '}</span>
                                        <span>{m.content}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <form className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center" onSubmit={handleSubmit}>
                        <Input
                            className="flex-1 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Type your message..."
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                        />
                        <Button className="ml-4" type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </main>
    );
}

