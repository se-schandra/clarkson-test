import './style.css';
import MessageDomConstructor from "./MessageDomConstructor";
import MessagesList from "./MessagesList";
import FlatTree from "./FlatTree";

document.addEventListener('DOMContentLoaded', () => {


    const messagesList = new MessagesList();

    messagesList.createMessagesList([
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


    const messageDomConstructor = new MessageDomConstructor();

    const domConstructorSection = document.querySelector(".domConstructor h4");
    messageDomConstructor.createMessageNode("PAR:Message with prefix par attached to given node", domConstructorSection);
    messageDomConstructor.createMessageNode("Message without prefix attached to given node", domConstructorSection);


    messageDomConstructor.createMessageNode("SYS:Message with prefix attached to body");

    messageDomConstructor.createMessageNode("Message without prefix attached to body");

    const flatTree = new FlatTree();

    console.log(flatTree.flattenTree());

});
