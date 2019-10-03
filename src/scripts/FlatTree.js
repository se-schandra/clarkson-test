export default class FlatTree {

    /**
     * Flattens a given tree object
     * @param tree
     * @param childIndex (childIndex is -1 for top level object)
     * @param propName
     */
    flattenTree(tree, childIndex, propName) {
        let res = {};
        tree.forEach((element, index) => {
            if (Object.keys(element).length) {
                // is an object
                for (let key in element) {
                    const elementElement = element[key];
                    const propName = childIndex > -1 ? `${childIndex}_children_${key}` : `${index}_${key}`;
                    if (Array.isArray(elementElement)) {
                        if (elementElement.length) {
                            if (elementElement.length) {
                                let flattenObj1 = this.flattenTree(elementElement, index, propName);
                                res = {
                                    ...res,
                                    ...flattenObj1
                                };
                            }
                        } else {
                            res[propName] = "[]"
                        }

                    } else {
                        res[propName] = elementElement;
                    }
                }
            } else {
                res[`${propName}_${index}`] = element;
            }

        });
        return res;
    }

    /**
     * get parent object from original (non-flattened) tree
     * @param nodeId
     * @param tree
     */
    getParentFromOriginalTree(nodeId, tree) {
        tree.forEach((element, index) => {
            if(element["children"] && element["children"]["id"] === nodeId){
                return element;
            }
        });
    }

    /**
     * insert node into original (non-flattened) tree
     * @param nodeId
     * @param newNode
     * @param tree
     */
    insertNodeInOriginalTree(nodeId,newNode, tree){
        tree.forEach((element, index) => {
            if(element.id === nodeId){
                if(!element.children){
                    element.children = new Array();
                }
                element.children.push(newNode);
                return element;
            }
        });
    }

    /**
     * get parent object from flattened tree
     * @param nodeId
     * @param flatTree
     */
    getParentFromFlattenedTree(nodeId, flatTree) {
        if (/^\d_children/.test(nodeId)) {
            let parent = {};
            const parentIndex = `${nodeId.charAt(0)}`;
            for (let key in flatTree) {
                const parentPrefix = `${parentIndex}_`;
                if (key.startsWith(parentPrefix)) {

                    //node belongs to parent key
                    const value = flatTree[key];

                    const childPrefix = `${parentPrefix}_children_`;
                    if (key.startsWith(childPrefix)) {
                        //is a child node in parent
                        this._constructParentFromFlatTree(parent["children"], key.replace(childPrefix, ""), key, value);
                    } else {
                        this._constructParentFromFlatTree(parent, key.replace(parentPrefix, ""), key, value);
                    }
                }
            }
        }
    }

    /**
     * method to create parentNode from flattened tree
     * @param parentNode
     * @param parentKey
     * @param flattenedKey
     * @param value
     * @private
     */
    _constructParentFromFlatTree(parentNode, parentKey, flattenedKey, value) {
        if (/_\d$/.test(flattenedKey)) {
            //is an array node
            const arrayChildKey = parentKey.substr(0, "_");
            if (!parentNode[arrayChildKey]) {
                parentNode[arrayChildKey] = new Array();
            }
            parentNode[arrayChildKey][parentKey.substr(parentKey.lastIndexOf("_") - 1)] = value;
        } else {
            parentNode[parentKey] = value;
        }
    }


    /**
     * Insert child node in flattened tree
     * @param nodeId
     * @param newNode
     * @param flatTree
     */
    insertNodeIntoFlatTree(nodeId,newNode, flatTree){

    }


}
