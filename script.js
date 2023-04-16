async function fetchData() {
    try {
        const response = await fetch("https://www.anapioficeandfire.com/api/books?pageSize=11")
        var data = await response.json();

        var finalHTML = "";
        data.forEach(element => {
            //console.log(element.characters[11]);
            var char1 = element.characters[8]; //character 1
            //console.log(char1)
            var char2 = element.characters[9]; //chatacter 2
            // console.log(char2)
            var char3 = element.characters[10]; //character 3
            // console.log(char3)
            var char4 = element.characters[11]; //chatacter 4
            // console.log(char4)
            var char5 = element.characters[12]; //character 5
            // console.log(char5)
            var char6 = element.characters[13]; //character 6
            // console.log(char5)
            


    fetchCharacterData1(char1)
    .then(function (res1) {

        fetchCharacterData2(char2)
        .then(function (res2) {

            fetchCharacterData3(char3)
            .then(function (res3) {

                fetchCharacterData4(char4)
                .then(function (res4) {

                    fetchCharacterData5(char5)
                    .then(function (res5) {

                        fetchCharacterData6(char6)
                        .then(function (res6) {      

                    const correctDate = new Date(element.released).toString();

            finalHTML = `<h4 style="background-color:#000080; padding:20px; font-weight:bold;
            color:#FFF0F5; text-align:center; font-size:25px;">Book Name : ${element.name}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; font-size:22px";>ISBN : ${element.isbn}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; background-color:#E8E8E8; font-size:22px">Country Name : ${element.country}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; font-size:22px">Number of Pages : ${element.numberOfPages}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; background-color:#E8E8E8; font-size:22px">Author Name : ${element.authors[0]}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; font-size:22px">Publisher Name : ${element.publisher}</h4>
            <h4 style="padding:5px; padding-left:35px; font-weight:bold; font-size:22px; background-color:#E8E8E8;"> Released On : ${correctDate}</h4>
            <h4 style="background-color:#000080; padding:15px; padding-left:20px; font-weight:bold;
            color:#FFF0F5; text-align:center; font-size:25px;">List of Characters in this Book</h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px; padding-top:10px"><ul><li> ${res1.name}<ul></li></h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px"><ul><li> ${res2.name}<ul></li></h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px"><ul><li> ${res3.name}<ul></li></h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px"><ul><li> ${res4.name}<ul></li></h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px"><ul><li> ${res5.name}<ul></li></h4>
            <h4 style=" padding-left:20px; font-weight:bold; font-size:22px"><ul><li> ${res6.name}<ul></li></h4>`;


                    const main = document.createElement("div");
                    main.style.display = 'flex';
                    main.style.flexWrap = "wrap";
                    main.style.alignContent = 'center';
                    main.style.backgroundColor = "#cce6ff";


                    var card = document.createElement('div');
                    card.style.marginTop = '70px';
                    card.style.marginRight = '50px';
                    card.style.marginBottom = '100px';
                    card.style.marginLeft = "360px";
                    card.style.height = "685px";
                    card.style.width = "800px";
                    card.style.backgroundColor = "#F0F8FF";
                    card.style.fontFamily = 'serif';
                    card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';                           
                    


                    card.innerHTML = finalHTML;

                    main.appendChild(card);

                    document.body.appendChild(main);

                      })
                    })
                  })
                })
              }) 
            })
          });

          }catch (error) {
            console.log(error);
        }

}
fetchData();


    async function fetchCharacterData1(char1) {
        const char1response = await fetch(char1)
        var char1_data = await char1response.json();
        //console.log(char1_data.name);
        return char1_data;
    };

    async function fetchCharacterData2(char2) {
        const char2response = await fetch(char2)
        var char2_data = await char2response.json();
        //console.log(char3_data.name);
        return char2_data;
    };

    async function fetchCharacterData3(char3) {
        const char3response = await fetch(char3)
        var char3_data = await char3response.json();
        //console.log(char3_data.name);
        return char3_data;
    };

    async function fetchCharacterData4(char4) {
        const char4response = await fetch(char4)
        var char4_data = await char4response.json();
        //console.log(char4_data.name);
        return char4_data;
    };

    async function fetchCharacterData5(char5) {
        const char5response = await fetch(char5)
        var char5_data = await char5response.json();
        //console.log(char5_data.name);
        return char5_data;
    };
    
    async function fetchCharacterData6(char6) {
        const char6response = await fetch(char6)
        var char6_data = await char6response.json();
        //console.log(char6_data.name);
        return char6_data;
    };