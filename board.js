$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    // Example data - replace with actual data
    const boardMembers = [
        { name: "John Doe", role: "President", image: "path_to_image_of_member1.jpg" },
        { name: "Jane Smith", role: "Vice President", image: "path_to_image_of_member2.jpg" },
        // More members...
    ];

    // Empty the container before adding new content
    $('#board').empty();

    // Dynamically add each member's profile to the board container
    boardMembers.forEach(member => {
        const memberHTML = `
            <div class="member">
                <img src="${member.image}" alt="Profile of ${member.name}">
                <h2>${member.name}</h2>
                <p>${member.role}</p>
            </div>`;
        $('#board').append(memberHTML);
    });
}
