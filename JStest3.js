const NFTs =[]

function character (_name, _eyecolor, _shirtType, _hairColor, _superPower) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyecolor,
        "shirtType": _shirtType,
        "hairColor": _hairColor,
        "superPower": _superPower
    }
    NFTs.push(NFT);
    console.log("character: " + _name);
}

function listNFTs () {
for(let i = 0; i < NFTs.length; i++) {
    console.log(NFTs[i]);
} 
}

function getTotalSupply() {
    console.log(NFTs.length);
}

character("kuraii", "Green", "Hoodie", "Blue", "TimeTraveler");
listNFTs();
getTotalSupply();
