
import MessageDomConstructor from "../scripts/MessageDomConstructor";

it("renders node with prefix class",()=>{
const messageDomConstructor = new MessageDomConstructor("SYS:foo");
    messageDomConstructor.createMessageNode("SYS:foo");
    expect(document.body.querySelector("div.sys")).not.toBeNull()
});

it("renders node with prefix class",()=>{
const messageDomConstructor = new MessageDomConstructor("foo");
    messageDomConstructor.createMessageNode("SYS:foo");

    expect(document.body.querySelector("div.sys")).toBeNull()
    expect(document.body.querySelector("div")).not.toBeNull()
});
