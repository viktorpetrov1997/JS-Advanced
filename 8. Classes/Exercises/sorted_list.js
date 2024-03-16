class List
{
    constructor()
    {
        this.list = [];
        this.size = 0;
    }

    updateSize() 
    {
        this.size = this.list.length;
    }
    
    orderList() 
    {
        this.list.sort((a, b) => a - b);
    }

    add(element)
    {
        this.list.push(element);
        this.orderList();
        this.updateSize();
    }

    remove(index)
    {
        if(index >= 0 && index < this.list.length) 
        {
            this.list.splice(index, 1); 
            this.orderList();
            this.updateSize();
        }
    }

    get(index) 
    {
        if(index >= 0 && index < this.list.length) 
        {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
