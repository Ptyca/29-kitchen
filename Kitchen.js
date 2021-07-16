class Kitchen {
    constructor(name) {
        this.list = [];
        this.name = name;

    }
    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve!`);
    }
    nupirkta(prodName, qty) {
        this.list.push({ prodName, qty });

    }
    turimiProduktai() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            ++count;
            console.log(`${count})${item.prodName[0].toUpperCase() + item.prodName.slice(1)}: ${item.qty}`);
        }
    }
    sunaudota(prodName, usedQty) {
        for (let i = 0; i < this.list.length; i++) {
            const product = this.list[i];
            if (product.prodName === prodName) {
                product.qty -= usedQty;
                break;
            }
        }
    }
    sugedesProduktas(prodName) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {

            if (this.list[i].prodName !== prodName) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    }
}



module.exports = Kitchen;