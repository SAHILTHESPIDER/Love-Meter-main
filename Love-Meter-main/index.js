const Name = document.querySelector(".name");
const crushName = document.querySelector(".crushName");
const btn = document.getElementById("calculate");
const mid_img=document.querySelector(".mid-img");
const container=document.querySelector(".container");
const result=document.querySelector(".result");
const label1=document.querySelector(".label1");
const label2=document.querySelector(".label2");
const reload=document.getElementById("reload");



reload.style.display="none"
btn.addEventListener("click", () => {
    if (Name.value === "" || crushName.value === "") {
        alert("Please enter the name");
    } else {
        // Remove spaces and convert the name to lowercase for case-insensitivity
        let cleanedName = Name.value.replace(/\s/g, '').toLowerCase();
        let cleanedCrushName = crushName.value.replace(/\s/g, '').toLowerCase();

        // combining name
        const letters = cleanedName + cleanedCrushName;

        let countsArray = [];
        let counts = {};

        // Count the occurrences of each letter
        for (let i = 0; i < letters.length; i++) {
            let letter = letters[i];

            // Check if the letter is already counted
            if (!counts.hasOwnProperty(letter)) {
                 counts[letter] = 1;
            } 
            else {
                counts[letter]++;
            }
        }

        // Extract counts from the object and create an array
        for (let letter in counts) {
            if (counts.hasOwnProperty(letter)) {
                countsArray.push(counts[letter]);
            }
        }

        // Function to sum array elements
        function sumArray(array) {
            let result = [];

            // Sum the elements
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                let firstIndex = i;
                let lastIndex = array.length - 1 - i;
                let sum = array[firstIndex] + array[lastIndex];
                result.push(sum);
            }

            // If the array has an odd length, add the middle element with 0
            if (array.length % 2 !== 0) {
                let middleIndex = Math.floor(array.length / 2);
                array[middleIndex] += 0; // Updating the array
                result.push(array[middleIndex]);
            }

            return result;
        }

        // Run the loop until the array is left with 2 numbers

        while (countsArray.length > 2) {
            countsArray = sumArray(countsArray);
            // console.log(countsArray.join('') + "%"); // Convert array to a string
        }

        const firstLetter = (countsArray[0]).toString();
        const secondLetter = (countsArray[1]).toString();
        const lovePercentage=firstLetter+secondLetter;
        const percentage=document.createElement('h1')
         percentage.innerHTML = `${Name.value} & ${crushName.value} love ${lovePercentage}%`;
         result.appendChild(percentage);
         btn.style.display="none";
         Name.style.display="none"
         crushName.style.display="none"
         label1.style.display="none"
         label2.style.display="none"
    

    if (cleanedName === "sahil" && cleanedCrushName==="neha" || cleanedName==="neha" && cleanedCrushName==="sahil"){
        mid_img.src='https://media.tenor.com/KmLVZ0FTxkgAAAAi/yes-yupi.gif';
        percentage.innerHTML = `${Name.value} & ${crushName.value} love 100%`;
        result.appendChild(percentage);

    }     
    else if (lovePercentage<=40) {
        mid_img.src='https://media.tenor.com/huYmQnSHqKwAAAAi/peach-cat.gif';
    }
    else if (lovePercentage>40 && lovePercentage<=70) {
        mid_img.src='https://media.tenor.com/pPqdea-6TwQAAAAi/mimibubu.gif';
        
    } 
    else if(lovePercentage>70){
       mid_img.src='https://media.tenor.com/KmLVZ0FTxkgAAAAi/yes-yupi.gif';
    }

    }
    reload.style.display="block";
    
});
    reload.addEventListener('click',function(){
    location.reload();
})
// var lessthan40= https://media.tenor.com/huYmQnSHqKwAAAAi/peach-cat.gif 1
// https://media.tenor.com/L5TJjUeSCPQAAAAi/happy-best.gif
// https://media.tenor.com/KmLVZ0FTxkgAAAAi/yes-yupi.gif 3
// https://media.tenor.com/pPqdea-6TwQAAAAi/mimibubu.gif2
