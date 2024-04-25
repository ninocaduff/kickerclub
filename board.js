// Make sure jQuery is properly loaded before this script runs
$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    // Example member data
    const boardMembers = [
        { name: "Mark Akhmetov", role: "President", image: "path_to_image_of_member1.jpg" },
        { name: "Moritz Reher", role: "Vice President", image: "path_to_image_of_member1.jpg" },
        { name: "Nino Caduff", role: "Head of Events", image: "https://raw.githubusercontent.com/ninocaduff/kickerclub/master/board/board_photo_nino" },
        { name: "Philipp Weber", role: "Head of Partnerships", image: "path_to_image_of_member1.jpg" },
        { name: "Alessandro Giordano", role: "Head of Legal & Merch", image: "path_to_image_of_member1.jpg" },
        { name: "Nils Nguyen", role: "Head of Finance", image: "path_to_image_of_member1.jpg" },
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
