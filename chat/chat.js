// Set this to the HTTPS address of the deployed Flutter chat app.
const hostedChatUrl = "";

if (hostedChatUrl) {
  const url = URL.parse(hostedChatUrl);
  if (url && url.protocol === "https:") {
    const openChat = document.querySelector("#open-chat");
    openChat.href = url.href;
    openChat.hidden = false;
    document.querySelector("#chat-status").textContent = "Start a conversation with Meera EI.";
    document.querySelector("#local-preview").hidden = true;
  }
}
