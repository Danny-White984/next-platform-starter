'use client';

import { useState } from 'react';

export default function FreeRamenPage() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) {
            setError('Please enter a message');
            return;
        }

        try {
            setStatus('pending');
            setError(null);

            const response = await fetch('/api/send-notification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message.trim(),
                    claimType: 'ramen',
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage('');
            } else {
                setStatus('error');
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('error');
            setError('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center">
            <section className="text-center py-8">
                <div className="text-8xl mb-6">🍜</div>
                <h1 className="mb-4 text-4xl sm:text-5xl">
                    Claim Your Free Ramen!
                </h1>
                <p className="text-xl text-neutral-300 max-w-xl mx-auto">
                    Enter your message below and we'll get back to you about your free ramen!
                </p>
            </section>

            <section className="w-full max-w-md">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-white text-lg font-medium">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your name and what you'd like..."
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                            disabled={status === 'pending'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'pending'}
                            className="w-full py-3 px-6 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'pending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg text-center">
                                Your message has been sent! We'll be in touch soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-900/50 border border-red-400 text-red-100 px-4 py-3 rounded-lg text-center">
                                {error}
                            </div>
                        )}
                    </form>
                </div>
            </section>

            <a
                href="/"
                className="text-neutral-400 hover:text-white transition-colors"
            >
                ← Back to Home
            </a>
        </div>
    );
}
