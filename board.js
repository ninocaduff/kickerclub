$(document).ready(function() {
    loadBoardMembers();
});

function loadBoardMembers() {
    const boardMembers = [
        { name: "Mark Akhmetov", role: "President", image: "actual_path_to_image_of_member1.jpg", info: "BWL" },
        { name: "Moritz Reher", role: "Vice President", image: "actual_path_to_image_of_member2.jpg", info: "BWL" },
        { name: "Nino Caduff", role: "Head of Events & IT", image: "https://raw.githubusercontent.com/ninocaduff/kickerclub/master/board/board_photo_nino.jpg", info: "VWL" },
        { name: "Philipp Weber", role: "Head of Partnerships", image: "https://raw.githubusercontent.com/ninocaduff/kickerclub/master/board/board_photo_philipp.jpg", info: "BWL" },
        { name: "Alessandro Giordano", role: "Head of Legal & Merch", image: "https://raw.githubusercontent.com/ninocaduff/kickerclub/master/board/board_photo_alessandro.jpg", info: "BLE" },
        { name: "Nils Nguyen", role: "Head of Finance", image: "https://raw.githubusercontent.com/ninocaduff/kickerclub/master/board/board_photo_nils.jpeg", info: "BWL" },
    ];

    $('#board').empty();

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
