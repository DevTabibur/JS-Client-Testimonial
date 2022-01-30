

// steps
// 1.call a self-invoked function
// 2. get all input as a var using querySelector
// 3. assign the description as a var
// 4. assign the img as a var
// 5.assign the author name as a var
// check that invoked function is running or not? and var is working or not?
// 6 .use constructor function . it has to be 3 parameters, img, author-name, author text.

// immediate self-invoked function

(
    function () {
        // get input var
        const authorImg = document.querySelector("#author-img");
        const authorName = document.querySelector("#author-name");
        const authorText = document.querySelector("#author-text");

        console.log(authorImg, authorName, authorText);
        const buttons = document.querySelectorAll(".btn");

        //Create a new customer using a customer constructor

        let customers = [];
        // buttons value set 
        let index = 0;

        //Customer Constructor
        function Customer (img, name, text){
            this.img = img;
            this.name = name;
            this.text = text;
        }

        //Create new customer using the constructor function
        function createCustomer(img, name, text){
            let fullImg = `./img/customer-${img}.jpg`;
            let customer = new Customer(fullImg, name, text);
            customers.push(customer);
        }

        createCustomer(0, "Mashrafi", "lorem2000000000000l");
        createCustomer(1, "Sakib", "lorem20llllllllllllll");
        createCustomer(2, "Liton Das", "lorem202222222222");
        createCustomer(3, "Tamim Iqbal", "lorem2033333333333");
        createCustomer(4, "Mustafiz", "lorem444444444444444");

        // buttons value set for proper work
        buttons.forEach(function(button){
            button.addEventListener("click", function (e){
                //button left
                if (button.classList.contains("btn-left")) {
                    index--;
                    if ( index < 0){
                        index = customers.length - 1;
                    }

                    // customerImage.src = customers[index].img
                    // customerName.textContent = customers[index].name
                    // customerText.textContent = customers[index].text
                }

                // button right
                if (button.classList.contains("btn-right")){
                    index++;
                    if(index > customers.length - 1){
                        index = 0;
                    }

                    // customerImage.src = customers[index].img
                    // customerName.textContent = customers[index].name
                    //  customerText.textContent = customers[index].text
                }
            })
        })

        console.log(index);

    } 
    ()
)
