"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"

type Message = {
    id: number
    text: string
    isBot: boolean
    timestamp: string
}

type ConversationStep = "name" | "phone" | "message" | "complete"

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [currentStep, setCurrentStep] = useState<ConversationStep>("name")
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        // Show welcome message after 3 seconds
        const timer = setTimeout(() => {
            setShowWelcome(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Initial welcome message
            const welcomeMessage: Message = {
                id: Date.now(),
                text: "👋 Welcome to Tru Glow! ✨\n\n🌟 Your Journey to Confidence Starts Here • Expert Care, Personalized Results\n\nHow can we help you today?",
                isBot: true,
                timestamp: "Just now"
            }
            setMessages([welcomeMessage])

            // Ask for name after a short delay
            setTimeout(() => {
                const nameQuestion: Message = {
                    id: Date.now() + 1,
                    text: "📝 Can we please have your name? 🙌",
                    isBot: true,
                    timestamp: "Just now"
                }
                setMessages(prev => [...prev, nameQuestion])
            }, 1000)
        }
    }, [isOpen])

    const handleSendMessage = () => {
        if (!inputValue.trim()) return

        // Add user message
        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            isBot: false,
            timestamp: "Just now"
        }
        setMessages(prev => [...prev, userMessage])

        const currentInput = inputValue
        setInputValue("")

        // Process based on current step
        setTimeout(() => {
            let botResponse: Message | null = null

            switch (currentStep) {
                case "name":
                    setUserName(currentInput)
                    botResponse = {
                        id: Date.now() + 1,
                        text: `Great to meet you, ${currentInput}! 😊\n\n📱 Could you share your phone number?`,
                        isBot: true,
                        timestamp: "Just now"
                    }
                    setCurrentStep("phone")
                    break

                case "phone":
                    setUserPhone(currentInput)
                    botResponse = {
                        id: Date.now() + 1,
                        text: "Perfect! 👍\n\n💬 How can we assist you with your hair care needs today?",
                        isBot: true,
                        timestamp: "Just now"
                    }
                    setCurrentStep("message")
                    break

                case "message":
                    botResponse = {
                        id: Date.now() + 1,
                        text: `Thank you for reaching out! 🙏\n\nOur team will contact you shortly at ${userPhone}.\n\nWe're excited to help you achieve your hair goals! ✨`,
                        isBot: true,
                        timestamp: "Just now"
                    }
                    setCurrentStep("complete")

                    // Here you can send the data to your backend or WhatsApp
                    // const whatsappMessage = `Name: ${userName}\nPhone: ${userPhone}\nMessage: ${currentInput}`
                    // const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`
                    // window.open(whatsappUrl, "_blank")
                    break

                case "complete":
                    botResponse = {
                        id: Date.now() + 1,
                        text: "Is there anything else I can help you with? 😊",
                        isBot: true,
                        timestamp: "Just now"
                    }
                    break
            }

            if (botResponse) {
                setMessages(prev => [...prev, botResponse!])
            }
        }, 800)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
        setShowWelcome(false)
    }

    const closeWelcome = () => {
        setShowWelcome(false)
    }

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {/* Welcome Bubble */}
                {showWelcome && !isOpen && (
                    <div className="absolute bottom-20 right-0 mb-2 w-80 animate-fade-in-up">
                        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={closeWelcome}
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                aria-label="Close welcome message"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="pr-6">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    👋 ✨ Expert Hair & Skin Solutions • Transforming Lives Daily
                                </p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                                    How can we help you today?
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Welcome to Tru Glow!
                                </p>
                            </div>

                            {/* Triangle pointer */}
                            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45" />
                        </div>
                    </div>
                )}

                {/* Chat Window */}
                {isOpen && (
                    <div className="absolute bottom-20 right-0 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-scale-in flex flex-col">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-white flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">Tru Glow Hair Clinic</h3>
                                        <p className="text-xs text-white/90">Online</p>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleChat}
                                    className="hover:bg-white/20 rounded-full p-1.5 transition-colors"
                                    aria-label="Close chat"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.isBot
                                            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
                                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                            }`}
                                    >
                                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                                        <p
                                            className={`text-xs mt-1 ${message.isBot
                                                ? "text-gray-500 dark:text-gray-400"
                                                : "text-white/80"
                                                }`}
                                        >
                                            {message.timestamp}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                            <div className="flex gap-2 items-end">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type an answer"
                                    rows={1}
                                    className="flex-1 resize-none rounded-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                                    style={{ minHeight: "44px", maxHeight: "120px" }}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                    className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                                    aria-label="Send message"
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Chat Button */}
                <button
                    onClick={toggleChat}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group relative overflow-hidden"
                    aria-label="Open chat"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                        {isOpen ? (
                            <X className="h-7 w-7 transition-transform duration-300 group-hover:rotate-90" />
                        ) : (
                            <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                        )}
                    </div>

                    {/* Notification Badge */}
                    {!isOpen && showWelcome && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                            1
                        </span>
                    )}
                </button>
            </div>
        </>
    )
}
