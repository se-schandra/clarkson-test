export default class MessagesList{

    createMessagesList(messages){
        const tbody = document.querySelector(".messages-table tbody");
      if (tbody) {
            messages.forEach((message, index) => {
                const row = document.createElement("tr");
                row.id = `message_${index}`;
                row.appendChild(document.createElement("td").createTextNode(message.date));
                row.appendChild(document.createElement("td").createTextNode(message.subject));
                row.appendChild(document.createElement("td").createTextNode(message.from));
                row.appendChild(document.createElement("td").createTextNode(message.attachment));
                row.appendChild(document.createElement("td").createTextNode(message.type));
                tbody.appendChild(row);
            })
        }
    }
}
