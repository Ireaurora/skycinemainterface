
            //Light Up Inner Circle using the letter "P"
            document.addEventListener("keydown", function() {
                if(event.keyCode === 80)
                    document.getElementById("circle").style.backgroundColor ="yellow"

            });
            //Light Up Outer Circle using the letter "M"
            document.addEventListener("keydown", function() {
                if(event.keyCode === 77)
                    document.getElementById("circle2").style.backgroundColor ="yellow"
            });
            //Light Up Border of Image1 using the letter "L"
            document.addEventListener("keydown", function() {
                if(event.keyCode === 76)
                    document.getElementById("image1").style.borderColor ="yellow"
            });
            //Light Up Border of Image1 using the letter "S"
            document.addEventListener("keydown", function() {
                if(event.keyCode === 83)
                    document.getElementById("image2").style.borderColor ="yellow"
            });
            //Light Up Border of Image1 using the letter "T"
            document.addEventListener("keydown", function() {
                if(event.keyCode === 84)
                    document.getElementById("image3").style.borderColor ="yellow"
            });
            //Help button if the user forgets the codes to light up
                  function myFunction1() {
                      console.log("hello");
            alert("Lighting up function: \n Press 'P' to light up the inner circle \n Press 'M' to light up the outer circle \n Press 'L' to light up the top movie image \n Press 'S' to light up the middle movie image \n Press 'T' to light up the bottom movie image");
        }
    