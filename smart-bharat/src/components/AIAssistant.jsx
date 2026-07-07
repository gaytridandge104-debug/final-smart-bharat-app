import { useCallback, useEffect, useRef, useState } from "react";

const quickAnswers = [
  {
    keys: ["aadhaar", "uidai"],
    answer: "For Aadhaar, keep proof of identity and address ready. You can update details through the UIDAI portal or at an Aadhaar Seva Kendra. Save the acknowledgement number so you can track the request.",
  },
  {
    keys: ["passport"],
    answer: "For passport services, register on Passport Seva, fill the form, pay online, book a PSK appointment, and carry original documents for verification.",
  },
  {
    keys: ["pan"],
    answer: "For PAN, apply through NSDL or UTIITSL, fill Form 49A, upload identity/address/date-of-birth proof, pay the fee, and track using the acknowledgement number.",
  },
  {
    keys: ["pm kisan", "farmer", "kisan"],
    answer: "For PM Kisan, eligible farmers need Aadhaar, bank details, and land records. Register on the PM-KISAN portal and wait for state land-record verification.",
  },
  {
    keys: ["ayushman", "health"],
    answer: "For Ayushman Bharat PM-JAY, check eligibility with your ration card or Aadhaar, complete e-KYC at a CSC or empanelled hospital, then use the Ayushman Card for cashless treatment.",
  },
  {
    keys: ["gst"],
    answer: "For GST registration, keep PAN, Aadhaar, business address proof, bank details, and proprietor/partner photos ready. Apply on the GST portal and track the ARN.",
  },
];

function getLocalAnswer(userText) {
  const lower = userText.toLowerCase();
  const match = quickAnswers.find((item) => item.keys.some((key) => lower.includes(key)));

  if (match) return match.answer;

  return "I can help with Aadhaar, PAN, passport, PM Kisan, Ayushman Bharat, GST, scholarships, licences, and civic complaints. Tell me the service name and what you want to do: apply, update, track, or understand documents.";
}

function AIAssistant({ initialQuestion = "" }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Ask me anything about government services - Aadhaar, PAN, passport, schemes, anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const lastExternalQuestion = useRef("");

  const callGemini = useCallback(async (userText, retries = 2) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return getLocalAnswer(userText);
    }

    const requestGemini = async (remainingRetries) => {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Smart Bharat, an AI assistant helping Indian citizens with government services such as Aadhaar, PAN, passport, PM Kisan, Ayushman Bharat, GST, and Startup India. Answer clearly and concisely in plain language. User question: ${userText}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (response.status === 429 && remainingRetries > 0) {
        await new Promise((r) => setTimeout(r, 2000));
        return requestGemini(remainingRetries - 1);
      }

      if (!response.ok) {
        throw new Error(`API error ${response.status}`);
      }

      const data = await response.json();
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        getLocalAnswer(userText)
      );
    };

    return requestGemini(retries);
  }, []);

  const sendPrompt = useCallback(async (prompt) => {
    const userText = prompt.trim();
    if (!userText || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setLoading(true);

    try {
      const aiText = await callGemini(userText);
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `The live AI service is not available right now, so here is a quick guide: ${getLocalAnswer(userText)}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [callGemini, loading]);

  useEffect(() => {
    const prompt = initialQuestion.trim();
    if (!prompt || prompt === lastExternalQuestion.current) return;

    lastExternalQuestion.current = prompt;
    sendPrompt(prompt);
  }, [initialQuestion, sendPrompt]);

  return (
    <section className="py-24 px-6 bg-white" id="ai-assistant">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            AI ASSISTANT
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Ask <span className="text-blue-600">Smart Bharat AI</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Real answers, powered by AI - try asking about Aadhaar, PAN, or PM Kisan.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === "user"
                    ? "bg-blue-600 text-white ml-auto rounded-br-sm"
                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="bg-white border border-gray-200 text-gray-500 text-sm px-4 py-2 rounded-2xl rounded-bl-sm w-fit">
                Typing...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-gray-200 p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendPrompt(input)}
              placeholder="Ask anything about government services..."
              className="flex-1 outline-none text-sm px-3 py-2 border border-gray-200 rounded-full"
            />
            <button
              type="button"
              onClick={() => sendPrompt(input)}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2 rounded-full"
            >
              Ask AI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIAssistant;
