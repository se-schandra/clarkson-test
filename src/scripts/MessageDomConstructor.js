export default class MessageDomConstructor{
    createMessageNode(string){
        document.body.appendChild(this._createNode(string));
    }

    appendMessageNode(string, parent) {
        parent.appendChild(this._createNode(string));
    }

    _createNode(string) {
        const prefixAttached = this._detachPrefix(string);
        const div = document.createElement("div");
        if (prefixAttached) {
            div.classList = prefixAttached[0];
        }
        div.appendChild(document.createTextNode(prefixAttached ? prefixAttached[1] : string));
        return div;
    }

    _detachPrefix(string) {
        const match = string.match(/^(SYS:|PAR:|ACT:)/);
        if(match){
            return string.split(":");
        }

        return undefined;
    }
}
