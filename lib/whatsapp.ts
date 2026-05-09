export function openWhatsApp(data: {
    name?: string;
    shop?: string;
}) {
    const phone = "919408334733"; // your number

    const message = `Hi, I want to grow my shop.

Name: ${data.name || ""}
Shop: ${data.shop || ""}`;

    const encoded = encodeURIComponent(message);

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
}