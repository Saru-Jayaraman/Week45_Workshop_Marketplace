const advertisements = [
    {
        image: "https://www.bhphotovideo.com/images/images1500x1500/dell_wnvdn_dell_latitude_3190_2_in_1_1618993.jpg", 
        title: "Dell Latitude 3190",
        specification: "2-in-1 11.6 HD Touch Intel 8GB 128GB SSD Win 11 Pro",
        description: "Super compact and highly portable 11.6-inch laptop for web surfing, quad-core Intel processor and fast 128GB SSD. Comes with a reversible HD resolution touchscreen so it can be used as a tablet. Weighing in at 1.4 kg.", 
        price: "2399 kr", 
        contact: "test1@gmail.com"
    },
    {
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/V0UUD2103198CD22.jpg", 
        title: "Dell Latitude 7410",
        specification: "2-in-1 14 Touch i5 (Gen 10) 16GB 256GB SSD with 4G & Win 11 Pro",
        description: "Dell Latitude 7410 with small mark screen! 14-inch laptop with a 360-degree Full HD touchscreen, tenth generation Intel i5 processor, 16GB RAM, handy backlit keyboard, built-in 4G modem and a super-fast 256GB SSD. Comes with Windows 11 Pro.", 
        price: "5999 kr", 
        contact: "test2@gmail.com"
    },
    {
        image: "https://www.dellrefurbished.com/mas_assets/cache/image/c/0/0/800x-3072.Jpg", 
        title: "Dell Precision 7540",
        specification: "15.6 Full HD i7-9750H 16GB 256GB SSD Quadro T2000 Win11 Pro (beg)",
        description: "Dell 7540 with 15.6-inch computer that has good performance for graphic work with the strong six-core Intel i7 processor, 16GB of RAM, and a powerful NVIDIA Quadro T2000 graphics card that has 4GB of GDDR6 graphics memory.", 
        price: "8499 kr", 
        contact: "test3@gmail.com"
    },
    {
        image: "https://www.bhphotovideo.com/images/images1500x1500/dell_wnvdn_dell_latitude_3190_2_in_1_1618993.jpg", 
        title: "Dell Latitude 3190",
        specification: "2-in-1 11.6 HD Touch Intel 8GB 128GB SSD Win 11 Pro",
        description: "Super compact and highly portable 11.6-inch laptop for web surfing, quad-core Intel processor and fast 128GB SSD. Comes with a reversible HD resolution touchscreen so it can be used as a tablet. Weighing in at 1.4 kg.", 
        price: "2399 kr", 
        contact: "test1@gmail.com"
    },
    {
        image: "https://c1.neweggimages.com/ProductImageCompressAll1280/V0UUD2103198CD22.jpg", 
        title: "Dell Latitude 7410",
        specification: "2-in-1 14 Touch i5 (Gen 10) 16GB 256GB SSD with 4G & Win 11 Pro",
        description: "Dell Latitude 7410 with small mark screen! 14-inch laptop with a 360-degree Full HD touchscreen, tenth generation Intel i5 processor, 16GB RAM, handy backlit keyboard, built-in 4G modem and a super-fast 256GB SSD. Comes with Windows 11 Pro.", 
        price: "5999 kr", 
        contact: "test2@gmail.com"
    },
    {
        image: "https://www.dellrefurbished.com/mas_assets/cache/image/c/0/0/800x-3072.Jpg", 
        title: "Dell Precision 7540",
        specification: "15.6 Full HD i7-9750H 16GB 256GB SSD Quadro T2000 Win11 Pro (beg)",
        description: "Dell 7540 with 15.6-inch computer that has good performance for graphic work with the strong six-core Intel i7 processor, 16GB of RAM, and a powerful NVIDIA Quadro T2000 graphics card that has 4GB of GDDR6 graphics memory.", 
        price: "8499 kr", 
        contact: "test3@gmail.com"
    }
]

const advertisementCard = (filter = '') => {
    const advertisementsContainer = document.getElementById('advertisementsContainer');
    advertisementsContainer.innerHTML = '';

    advertisements
    .filter(ad => ad.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach((advertisement, index) => {
        const parentElement1 = document.createElement("div");
        parentElement1.classList.add("card", "col", "col-md-4", "my-1", "border", "rounded", "bg-light");
    
        const parentElement2 = document.createElement("div");
        parentElement2.classList.add("d-flex", "flex-column", "my-2");

        const childElement1 = document.createElement("img");
        childElement1.classList.add("card-img-top");
        childElement1.style.objectFit = "contain";
        childElement1.height = "200";
        childElement1.src = advertisement.image; 
        childElement1.onerror = function() {
            childElement1.src = 'img/DellLaptop.webp';
            childElement1.alt = 'Dell Laptop Image';
        };
        
        const childElement2 = document.createElement("div");
        childElement2.classList.add("card-body");

        const grandChildElement1 = document.createElement("h5");
        grandChildElement1.classList.add("card-title");
        grandChildElement1.textContent = advertisement.title;

        const grandChildElement2 = document.createElement("p");
        grandChildElement2.classList.add("card-text");
        grandChildElement2.textContent = advertisement.specification;
         
        const grandChildElement3 = document.createElement("h4");
        grandChildElement3.classList.add("card-text", "text-danger", "fw-bolder");
        grandChildElement3.textContent = advertisement.price;

        const greatGrandChildElement1 = document.createElement("span");
        greatGrandChildElement1.classList.add("card-text", "fw-bolder", "spanElement");
        greatGrandChildElement1.textContent = "*****";

        const grandChildElement4 = document.createElement("p");
        grandChildElement4.classList.add("card-text", "fw-bolder");
        grandChildElement4.textContent = "Contact: ";

        const childElement3 = document.createElement("div");
        childElement3.classList.add("card-footer", "text-center");

        const grandChildElement5 = document.createElement("button");
        grandChildElement5.type = "button";
        grandChildElement5.classList.add("btn", "btn-info", "btn-block", "mx-2", "contactButton");
        grandChildElement5.textContent = "Show Contact";                

        const grandChildElement6 = document.createElement("button");
        grandChildElement6.type = "button";
        grandChildElement6.classList.add("btn", "btn-info", "btn-block", "mx-2", "detailsButton");
        grandChildElement6.textContent = "Show Details";

        const grandChildElement7 = document.createElement("div");
        grandChildElement7.classList.add("card-text");
        grandChildElement7.innerHTML = 
        `
            <div class="details-tab" id="details-${index}" style="display:none; padding: 10px; margin-top: 1px; background-color: lightgrey;">
                <p><strong>Description:</strong> ${advertisement.description}</p>
            </div>
        `;

        childElement2.appendChild(grandChildElement1);
        childElement2.appendChild(grandChildElement2);
        childElement2.appendChild(grandChildElement3);
        grandChildElement4.appendChild(greatGrandChildElement1);
        childElement2.appendChild(grandChildElement4);
        childElement3.appendChild(grandChildElement5);
        childElement3.appendChild(grandChildElement6);

        parentElement2.appendChild(childElement1);
        parentElement2.appendChild(childElement2);
        parentElement2.appendChild(childElement3);
        parentElement2.appendChild(grandChildElement7);
        parentElement1.appendChild(parentElement2);

        const grandParentSection = document.getElementById("advertisementsContainer");
        grandParentSection.appendChild(parentElement1);
    });

    document.querySelectorAll('.contactButton').forEach((button, index) => {
        button.setAttribute('data-index', index);
        button.addEventListener('click', toggleContact);
    });
    document.querySelectorAll('.detailsButton').forEach((button, index) => {
        button.setAttribute('data-index', index);
        button.addEventListener('click', showDetails);
    });
    document.querySelectorAll('.spanElement').forEach((contact, index) => {
        contact.setAttribute('id', "contact-".concat(index));
    });
}

function toggleContact(event) {
    const contactButtonIndex = event.target.getAttribute("data-index");
    const contactSpan = document.getElementById(`contact-${contactButtonIndex}`);
    if (contactSpan.textContent === '*****') {
        contactSpan.textContent = advertisements[contactButtonIndex].contact;
        event.target.textContent = 'Hide Contact';
    } else {
        contactSpan.textContent = '*****';
        event.target.textContent = 'Show Contact';
    }
}

function showDetails(event) {
    const detailsButtonIndex = event.target.getAttribute("data-index");
    const detailsDiv = document.getElementById(`details-${detailsButtonIndex}`);
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        event.target.textContent = 'Hide Details';
    } else {
        detailsDiv.style.display = "none";
        event.target.textContent = 'Show Details';
    }
}

document.getElementById('filterTitle').addEventListener('input', (event) => {
    advertisementCard(event.target.value);
});

advertisementCard();