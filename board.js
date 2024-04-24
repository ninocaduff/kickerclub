$(document).ready(function(){
    // Example: Load board members dynamically or any specific interactions
    loadBoardMembers();
});

function loadBoardMembers() {
    // Simulated data loading
    const boardMembers = [
        { name: "John Doe", role: "President", image: "path/to/image.jpg" },
        { name: "Jane Smith", role: "Vice President", image: "path/to/image.jpg" }
    ];

    boardMembers.forEach(member => {
        $('#board').append(
            `<div class="member">
                <img src="${member.image}" alt="Profile of ${member.name}">
                <h2>${member.name}</h2>
                <p>${member.role}</p>
            </div>`
        );
    });
}
