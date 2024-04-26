$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    // Example member data
    const boardMembers = [
        { name: "Mark Akhmetov", role: "President", image: "path_to_image_of_member1.jpg", info: "Mark Akhmetov is the president of Kicker Club. He has been actively involved in promoting the sport for over a decade." },
        // Add more members here
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
                <div class="member-info">${member.info}</div>
            </div>`
        );
    });
}
