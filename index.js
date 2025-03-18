/*
    A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

    The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

    A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

    New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.
*/

const names = ["Alice",
                "Bob",
                "Carol",
                "Dr. Slice",
                "Dr. Pressure",
                "Prof. Possibility",
                "Prof. Prism",
                "Dr. Impulse",
                "Prof. Spark",
                "Dr. Wire",
                "Prof. Goose"];

const occupations = ["writer",
                    "teacher",
                    "programmer",
                    "gardener",
                    "driver"];

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
]

function renderFreelancers() {
    const freelancerList = document.getElementById('freelancer-list');
    freelancerList.textContent = ''; // Clear existing list

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement('div');
        freelancerDiv.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.price}`;
        freelancerList.appendChild(freelancerDiv);
    });

    updateAveragePrice();
}

function calculateAveragePrice() {
    if (freelancers.length === 0) return 0;
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    return (total / freelancers.length).toFixed(2);
}

function updateAveragePrice() {
    const averagePrice = calculateAveragePrice();
    document.getElementById('average-price').textContent = `${averagePrice}`;
}

function generateRandomFreelancer() {
    console.log("got here");
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 1;

    const newFreelancer = { name: randomName, 
                            price: randomPrice, 
                            occupation: randomOccupation };

    freelancers.push(newFreelancer);
    renderFreelancers();
}

renderFreelancers();

//setInterval();
//clearInterval(generateRandomFreelancer, 5000);
//const timer = setInterval(() => generateRandomFreelancer(), 1000);
// setTimeout(() => {
//     clearInterval(timer), 5000
// });


const timer = setInterval(generateRandomFreelancer, 100)
setTimeout(() => {clearInterval(timer)}, 500
);