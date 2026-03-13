(function () {
  const form = document.getElementById("main-form");
  const result = document.getElementById("contact-result");

  if (!form || !result) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = new URLSearchParams();
    data.set("name", String(document.getElementById("name")?.value || ""));
    data.set("email", String(document.getElementById("email")?.value || ""));
    data.set("message", String(document.getElementById("message")?.value || ""));

    try {
      const response = await fetch("/api/web/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      result.textContent = "Message sent successfully.";
    } catch (error) {
      result.textContent = "Could not send message.";
    }
  });
})();
