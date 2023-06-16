class collatz{
    ans;
    num;
    constructor(num) {
        this.num = num;
    }

    getcollatz() {
        if(this.num %2 ===0) {
            this.ans = this.num/2;
        } else {
            this.ans = this.num*3+1;
        }
        return this.ans;
    }
}

module.exports = collatz;