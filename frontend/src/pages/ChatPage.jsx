import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MessageCircle, Send } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";

export default function ChatPage({ workspace = "client" }) {
  const { user, token } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const selectedId = Number(searchParams.get("conversation"));

  async function loadConversations(nextSelectedId = selectedId) {
    const list = await api.getConversations(token);
    setConversations(list);
    const target = nextSelectedId || list[0]?.id;
    if (target) {
      const detail = await api.getConversation(target, token);
      setSelected(detail);
      setSearchParams({ conversation: String(target) }, { replace: true });
    } else {
      setSelected(null);
    }
  }

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const list = await api.getConversations(token);
        if (!active) return;
        setConversations(list);
        const target = selectedId || list[0]?.id;
        if (target) {
          const detail = await api.getConversation(target, token);
          if (active) {
            setSelected(detail);
          }
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [selectedId, token]);

  const heading = workspace === "vendor" ? "Vendor inbox" : "Client inbox";
  const emptyCopy = workspace === "vendor"
    ? "Client enquiries will appear here after someone messages you from services or gallery."
    : "Start a conversation from a service card or gallery post.";

  const selectedMessages = useMemo(() => selected?.messages || [], [selected]);

  async function handleSelect(conversationId) {
    try {
      setError("");
      setSearchParams({ conversation: String(conversationId) });
      const detail = await api.getConversation(conversationId, token);
      setSelected(detail);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleSend(event) {
    event.preventDefault();
    if (!selected || !message.trim()) {
      return;
    }
    try {
      setError("");
      const response = await api.sendConversationMessage(selected.id, { message: message.trim() }, token);
      setSelected(response);
      setMessage("");
      await loadConversations(response.id);
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) {
    return <section className="card vendor-panel"><p className="subtle">Loading conversations...</p></section>;
  }

  return (
    <section className={workspace === "vendor" ? "vendor-page-grid" : "client-workspace page"}>
      <div className="workspace-panel-head">
        <div>
          <span className="workspace-kicker"><MessageCircle size={14} /> Chat</span>
          <h1>{heading}</h1>
          <p className="subtle">Messages are saved now, and the same conversation model can support booking negotiation, notifications, and status updates later.</p>
        </div>
        {workspace === "client" && <Link className="ghost-button" to="/services">Explore services</Link>}
      </div>

      {error && <p className="error">{error}</p>}

      <div className="chat-shell">
        <aside className="chat-list workspace-panel">
          {conversations.length === 0 && <p className="subtle">{emptyCopy}</p>}
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              type="button"
              className={`chat-thread ${selected?.id === conversation.id ? "active" : ""}`}
              onClick={() => handleSelect(conversation.id)}
            >
              <strong>{workspace === "vendor" ? conversation.clientName : conversation.vendorName}</strong>
              <span>{conversation.subject || "Service enquiry"}</span>
              <p>{conversation.lastMessage || "No messages yet."}</p>
            </button>
          ))}
        </aside>

        <section className="chat-panel workspace-panel">
          {!selected ? (
            <p className="subtle">{emptyCopy}</p>
          ) : (
            <>
              <div className="chat-panel-head">
                <div>
                  <span className="workspace-kicker">{selected.status}</span>
                  <h2>{workspace === "vendor" ? selected.clientName : selected.vendorName}</h2>
                  <p>{selected.subject || "Service enquiry"}</p>
                </div>
              </div>

              <div className="chat-message-list">
                {selectedMessages.map((item) => (
                  <article key={item.id} className={`chat-message ${item.senderUserId === user?.id ? "mine" : ""}`}>
                    <strong>{item.senderName}</strong>
                    <p>{item.body}</p>
                    <span>{new Date(item.createdAt).toLocaleString()}</span>
                  </article>
                ))}
              </div>

              <form className="chat-compose" onSubmit={handleSend}>
                <textarea
                  placeholder="Write your message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <button className="primary-button" type="submit">
                  <Send size={16} /> Send
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </section>
  );
}
