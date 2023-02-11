// Class to store retreived price information
class Prices {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy;
        this.sell = sell;
        this.id = id;
        this.pair = pair;
        this.timestamp = timestamp;
    }

    // Method that returns mid-point value between buy and sell 
    mid() {
        return ((this.buy + this.sell) / 200);
    }

    // Method that returns the quote currency of the trade pair
    quote() {
        return this.pair.substring(3);
    }
}

// Class to abstract data retrieval
class DataSource {
    async getPrices() {
        return fetch('https://interview.switcheo.com/test.json')
            .then((response) => response.json())
            .then((data) => data.data.prices.map(
                (price) => new Prices(
                    price.buy, 
                    price.sell, 
                    price.id, 
                    price.pair, 
                    price.timestamp)
            ))
    }
}

const ds = new DataSource;

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });