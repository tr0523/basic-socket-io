const socket = io();

const handleEditBox = () => {
    const editForm = document.getElementById('editForm');
    const editBox = document.getElementById('editBox');
    const channelSelect = document.getElementById('channelSelect');
    
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if(editBox.value) {            
            const data = {
                message: editBox.value,
                channel: channelSelect.value,
            };

            socket.emit('chat message', data);
            editBox.value = '';
        }
    });
};

const displayMessage = (msg) => {    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    document.getElementById('messages').appendChild(messageDiv);
};

const init = () => {
    handleEditBox();
    socket.on('chat message', displayMessage);
};

window.onload = init;