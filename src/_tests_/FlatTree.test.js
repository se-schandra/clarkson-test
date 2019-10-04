import FlatTree from "../scripts/FlatTree";

describe("FlatTree renders flat tree and allows retriveval and update to the tree", () => {
    const tree = [{
        "name": "FORT",
        "parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
        "id": "c64ac3d7-5e88-40ed-8d6f-e7f10d21c5bc",
        "children": [{
            "name": "test@app.live",
            "favouritesForUsers": [3, 18927, 17552],
            "id": "697eae2f-40dd-445e-a0f0-a918f3a4d5c0"
        }]
    }];

    let flatTree;

    beforeAll(() => {
        flatTree = new FlatTree();
    });

    it("renders flatten tree", () => {

        const flattenTree = flatTree.flattenTree(tree);

        expect(Object.keys(flattenTree).length).toEqual(8);
        expect(flattenTree["0_name"]).toEqual("FORT");
        expect(flattenTree["0_children_name"]).toEqual("test@app.live")

    });

    it("returns parent if its exists", () => {
        const result = flatTree.getParentFromOriginalTree("697eae2f-40dd-445e-a0f0-a918f3a4d5c0", tree);
        expect(result).not.toBeNull();
        expect(Object.keys(result).length).toEqual(4);
    });

    it("inserts child in tree structure", () => {

        const result = flatTree.insertNodeInOriginalTree("c64ac3d7-5e88-40ed-8d6f-e7f10d21c5bc", {
            "name": "test2@app.live",
            "favouritesForUsers": [5564],
            "id": "8273436-40dd-445e-a0f0-a918f3a4d5c0"
        }, tree);

        expect(result).not.toBeNull();
        const updatedNode = result.find(node => node.id === "c64ac3d7-5e88-40ed-8d6f-e7f10d21c5bc");
        expect(updatedNode).not.toBeNull();
        const newChildNode = updatedNode.children.find(node => node.id === "8273436-40dd-445e-a0f0-a918f3a4d5c0");
        expect(newChildNode).not.toBeNull();
        expect(Object.keys(newChildNode).length).toEqual(3);
    });

});
