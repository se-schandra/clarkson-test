import FlatTree from "../scripts/FlatTree";

it("renders flatten tree",()=>{
    const flatTree = new FlatTree();
    flatTree.flattenTree(
        {
            "name": "FORT",
            "parentFolderId": "1e5196f3-c3f9-34db-aaab-8efdd63dd5b0",
            "id": "c64ac3d7-5e88-40ed-8d6f-e7f10d21c5bc",
            "children": [{
                "name": "test@app.live",
                "favouritesForUsers": [3, 18927, 17552],
                "id": "697eae2f-40dd-445e-a0f0-a918f3a4d5c0"
            }]
        }
    )

    //TODO test the flattened structure matches the expected output

});

it("returns parent if its exists",()=>{

});

it("inserts child in tree structure",()=>{


});

