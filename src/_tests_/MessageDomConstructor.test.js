import MessageDomConstructor from "../scripts/MessageDomConstructor";

describe("MesageDomContructor appends messages message to body or given node", () => {

    let messageDomConstructor;

    beforeAll(() => {
        messageDomConstructor = new MessageDomConstructor();
    });

    it("renders node with prefix class", () => {

        messageDomConstructor.createMessageNode("SYS:foo");
        expect(document.body.querySelector("div.SYS")).not.toBeNull();
    });

    it("renders node without prefix class", () => {
        const messageDomConstructor = new MessageDomConstructor();
        messageDomConstructor.createMessageNode("foo");

        expect(document.body.querySelector("div.sys")).toBeNull();
        expect(document.body.querySelector("div")).not.toBeNull();
    });

});
