async function searchCharacter() {
  const name = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (!name.trim()) return;

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = "Searching...";

  try {
    const res = await fetch("https://api.api-onepiece.com/v2/characters/en");
    const data = await res.json();

    const found = data.find(char => char.name.toLowerCase().includes(name));

    if (!found) {
      resultDiv.innerHTML = "Character not found.";
      return;
    }

    resultDiv.innerHTML = `
      <h2>${found.name}</h2>
      <p><strong>Occupation:</strong> ${found.job}</p>
      <p><strong>Age:</strong> ${found.age}</p>
      <p><strong>Bounty:</strong> ${found.bounty || "Unknown"}</p>
      <p><strong>Status:</strong> ${found.status}</p>
      <p><strong>Crew:</strong> ${found.crew?.name || "Independent"}</p>
      <p><strong>Fruit:</strong> ${found.fruit?.name || "None"}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = "Error looking for character.";
    console.error(err);
  }
}

document.getElementById("searchInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchCharacter();
  }
});
