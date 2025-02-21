const beaches = [
    { name: "Goa - Baga Beach", location: "Goa", history: "Baga Beach is famous for its nightlife and water sports." },
    { name: "Puri Beach", location: "Odisha", history: "A sacred beach near the Jagannath Temple, known for its golden sand." },
    { name: "Marina Beach", location: "Chennai", history: "The second longest urban beach in the world, a popular tourist spot." },
    { name: "Kovalam Beach", location: "Kerala", history: "Known for its lighthouse and serene waters, perfect for relaxation." }
];

function displayBeaches() {
    const container = document.getElementById("beaches");
    beaches.forEach(beach => {
        const beachCard = document.createElement("div");
        beachCard.classList.add("beach-card");
        beachCard.innerHTML = `
            <h2>${beach.name}</h2>
            <p><strong>Location:</strong> ${beach.location}</p>
            <p>${beach.history}</p>
            <button class="btn" onclick="alert('${beach.name} is a must-visit!')">Explore</button>
        `;
        container.appendChild(beachCard);
    });
}

window.onload = displayBeaches;
