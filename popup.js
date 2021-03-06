document.addEventListener('DOMContentLoaded', async () => {
    const linksList = document.getElementById('linksList');

    // const addr = address.value;
    const btn = document.getElementById('btn');
    console.log('address', address);

    // const getValueInput = () =>{
    //     let inputValue = document.getElementById("domTextElement").value; 
    //     document.getElementById("valueInput").innerHTML = inputValue; 
    //   }




    const getTx = async () => {
        const address = document.getElementById('address').value;
        console.log(address);

        const url = `https://api-office.cosmostation.io/groot-16/v1/account/new_txs/${address}?limit=100`;

        const res = await fetch(url);
        const txList = await res.json();

        console.log(txList);

        const makeHtml = txList.map(item => {
            return `<li class = "tx-link">
        
            ${item.data.tx.body.messages[0].amount[0].amount}
            ${item.data.tx.body.messages[0].to_address}
            ${item.data.tx.body.messages[0].from_address}
            </li>
            `
        }).join('');

        linksList.innerHTML = makeHtml;
        //     const videoLinks = [...document.querySelectorAll('.video-link')];
        //     videoLinks.forEach((link) => link.addEventListener('click', copy));

    }


    btn.addEventListener('click', getTx);
})
