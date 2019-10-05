export default class MessagesList {

    createMessagesList(messages) {
        const tbodyMobile = document.querySelector(".messages-table.mobile tbody");
        const tbodyDesktop = document.querySelector(".messages-table.desktop tbody");
        if (tbodyMobile && tbodyDesktop) {
            messages.forEach((message, index) => {

                const row1 = document.createElement("tr");
                row1.appendChild(this.createCell(message.from));
                row1.appendChild(this.createCell(message.type));
                tbodyMobile.appendChild(row1);

                const row2 = document.createElement("tr");
                const mobileSubject = this.createCell(message.subject);
                mobileSubject.colSpan = 2;
                row2.appendChild(mobileSubject);
                tbodyMobile.appendChild(row2);

                const row3 = document.createElement("tr");
                row3.appendChild(this.createCell(message.date));
                row3.appendChild(this.createCell(message.attachment));
                tbodyMobile.appendChild(row3);


                //desktop

                const row = document.createElement("tr");
                row.class = `message_${index}`;
                row.appendChild(this.createCell(message.date));

                row.appendChild(this.createCell(message.subject));

                row.appendChild(this.createCell(message.from));

                row.appendChild(this.createCell(message.attachment));

                row.appendChild(this.createCell(message.type));
                tbodyDesktop.appendChild(row);


            })
        }
    }

    createCell(text) {
        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(text));
        return cell;
    }
}
