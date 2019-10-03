export default class MessagesList {

    createMessagesList(messages) {
        const tbody = document.querySelectorAll(".messages-table tbody");
        if (tbody) {
            messages.forEach((message, index) => {
                const row = document.createElement("tr");
                row.class = `message_${index}`;
                const date = this.createCell(message.date);
                const subject = this.createCell(message.subject);
                const from = this.createCell(message.from);
                const attachemnet = this.createCell(message.attachment);
                const type = this.createCell(message.type);

                const row1 = document.createElement("tr");
                row1.appendChild(from);
                row1.appendChild(type);
                tbody[0].appendChild(row1);

                const row2 = document.createElement("tr");
                row2.colSpan = 2;
                row1.appendChild(subject);
                tbody[0].appendChild(row2);

                const row3 = document.createElement("tr");
                row3.colSpan = 2;
                row1.appendChild(date);
                tbody[0].appendChild(attachemnet);


                row.appendChild(date);

                row.appendChild(subject);

                row.appendChild(from);

                row.appendChild(attachemnet);

                row.appendChild(type);
                tbody[1].appendChild(row);


            })
        }
    }

    createCell(text) {
        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(text));
        return cell;
    }
}
