function search(ticket) {
    console.log(ticket)
    fetch("https://api-analitica.sunoresearch.com.br/api/Quote/GetQuote?ticker=" + ticket)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var div = document.createElement('div')
            var ticker = document.createElement('h2')
            // var open = document.createElement('h2')

            var close = document.createElement('h2')

            ticker.innerHTML = "Ticker: " + data.ticker
            // open.innerHTML = "Valor de abertura " + data.previousClosePrice
            close.innerHTML = "Valor de fechamento: " + data.lastPrice


            div.appendChild(ticker)
            // div.appendChild(open)
            div.appendChild(close)

            document.body.appendChild(div)
        })
}
