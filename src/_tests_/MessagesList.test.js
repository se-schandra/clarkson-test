import MesagesList from "../scripts/MessagesList";

describe("Message list renders list for mobile and desktop mode", () => {

    function createTable(className) {
        const table = document.createElement("table");
        table.classList = `messages-table ${className}`;
        table.appendChild(document.createElement("tbody"));

        return table;
    }

    beforeAll(() => {
        document.body.appendChild(createTable("mobile"));
        document.body.appendChild(createTable("desktop"));
    });

    it("renders messages in document body", () => {

        const mesagesList = new MesagesList();
        mesagesList.createMessagesList([
            {
                date: "10/10/2018",
                subject: "a",
                from: "Alice",
                attachment: "test.html",
                type: "MESSAGE"
            }, {
                date: "10/11/2018",
                subject: "b",
                from: "James",
                attachment: "test.html",
                type: "MESSAGE2"
            }, {
                date: "10/12/2018",
                subject: "c",
                from: "Tom",
                attachment: null,
                type: "MESSAGE3"
            }]);

        expect(document.body.querySelector("table.desktop tbody").children.length).toEqual(3);
        expect(document.body.querySelector("table.mobile tbody").children.length).toEqual(9);

    });

});
