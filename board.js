// Make sure jQuery is properly loaded before this script runs
$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    // Example member data
    const boardMembers = [
        { name: "Mark Akhmetov", role: "President", image: "path_to_image_of_member1.jpg" },
        { name: "Nino Caduff", role: "Head of Events", image: "path_to_image_of_member1.jpg" },
        { name: "Philipp Weber", role: "Head of Partnerships", image: "path_to_image_of_member1.jpg" },
    ];
    
    // Empty the container before adding new content
    $('#board').empty();

    // Dynamically generate and append member information to the board container
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