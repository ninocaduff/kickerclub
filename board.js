$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    // Simulated data loading
    const boardMembers = [
        { name: "John Doe", role: "President", image: "path/to/image1.jpg" },
        { name: "Jane Smith", role: "Vice President", image: "path/to/image2.jpg" },
        { name: "Emily Johnson", role: "Secretary", image: "path/to/image3.jpg" },
        { name: "Mike Brown", role: "Treasurer", image: "path/to/image4.jpg" }
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
