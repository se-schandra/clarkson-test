export default class MessageDomConstructor{
    createMessageNode(string){
        const prefixAttached = this._detachPrefix(string);
        const div = document.createElement("div");
        if(prefixAttached){
            div.class = prefixAttached[0];
        }
        div.appendChild(document.createTextNode(prefixAttached? prefixAttached[1]: string));

        document.body.appendChild(div);
    }

    _detachPrefix(string) {
        const match = string.match(/^(SYS:|PAR:|ACT:)/);
        if(match){
            return string.split(":");
        }

        return undefined;
    }
}
