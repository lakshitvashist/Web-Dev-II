const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const clearBtn = document.getElementById('clearBtn');

function renderEvent(title, date, category, desc) {
    const emptyMsg = document.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    const eventDiv = document.createElement('div');
    eventDiv.className = 'event-item';
    eventDiv.innerHTML = `
        <strong>${title}</strong> - <small>${date} (${category})</small>
        <p style="margin: 5px 0 0; font-size: 0.9em;">${desc}</p>
    `;
    eventList.appendChild(eventDiv);
}

eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const category = document.getElementById('eventCategory').value;
    const desc = document.getElementById('eventDescription').value;

    renderEvent(title, date, category, desc);
    eventForm.reset();
});

clearBtn.addEventListener('click', () => {
    eventList.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
});