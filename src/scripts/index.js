
import './style.css';
import MessageDomConstructor from "./MessageDomConstructor";
import MessagesList from "./MessagesList";

document.addEventListener('DOMContentLoaded', () => {
new MessageDomConstructor().createMessageNode("SYS:foo");

new MessagesList().createMessagesList([
    {
        date:"10/10/2018",
    from:"alice",
    attachment:"test.html",
    type:"MESSAGE"
}])
});
