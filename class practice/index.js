class Book{
    constructor(title, author ,copyrightDate , isbn , noOfPage , checkoutTimes , isDiscarded){
        this.title = title;
        this.author  = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.noOfPage = noOfPage;
        this.checkoutTimes = checkoutTimes;
        this.isDiscarded = isDiscarded;
    }

    checkout(uses = 1){
        this.checkoutTimes += uses;
    }
}

class Manual extends Book{
    constructor(title, author ,copyrightDate , isbn , noOfPage , checkoutTimes , isDiscarded){
        super(title, author ,copyrightDate , isbn , noOfPage , checkoutTimes , isDiscarded);
    }

    dispose(currentYear){
        if(currentYear-this.copyrightDate >5){
            this.isDiscarded = 'Yes';
        }
    }
}

class Novel extends Book{
    constructor(title, author ,copyrightDate , isbn , noOfPage , checkoutTimes , isDiscarded){
        super(title, author ,copyrightDate , isbn , noOfPage , checkoutTimes , isDiscarded);
    }

    dispose(){
        if(this.checkoutTimes>100){
            this.isDiscarded = 'No';
        }
    }
}

const novel1 = new Novel('Pride and Prejudice' , 'Jane Austen' , 1813 , '111111111', 432,32,'No');
const manual1 = new Manual('Top secret shuttle building manual' , 'Redacted' , 2013, '0000000000' ,1147,1, 'No')


novel1.checkout(5);
novel1.dispose();
manual1.checkout(3);
manual1.dispose(2023);

console.log(novel1);
console.log(manual1);