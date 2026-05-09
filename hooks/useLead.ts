export async function createLead(data: any) {
    const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
}