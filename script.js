function getUsers(){ 
fetch("https://randomuser.me/api/?results=3")
  .then((rawData) => {
    return rawData.json();
  })
  .then((data) => {
    document.querySelector(".cards").innerHTML = "";
    data.results.forEach((element) => {
      // Main container
      const card = document.createElement("div");
      card.className =
        "bg-gray-800 text-white rounded-xl shadow-lg p-6 w-74 flex flex-row items-center";

      // Profile Image
      const img = document.createElement("img");
      img.src = element.picture.large;
      img.alt = "Profile";
      img.className = "w-24 h-24 rounded-full mr-4";

      // Text container
      const textContainer = document.createElement("div");

      // Name
      const name = document.createElement("h2");
      name.textContent = element.name.title + " " + element.name.first + " " + element.name.last;
      name.className = "text-xl font-semibold mb-2";

      // Email
      const email = document.createElement("p");
      email.textContent = element.email;
      email.className = "text-gray-400";

      // Append children to text container
      textContainer.appendChild(name);
      textContainer.appendChild(email);

      // Append image + textContainer to card
      card.appendChild(img);
      card.appendChild(textContainer);

      // Finally, append card to body (or another parent)
      document.querySelector(".cards").appendChild(card);
    });
  });
}
getUsers();

document.querySelector("#refreshButton").addEventListener("click",getUsers);
