// Sample User Profiles
const userProfile = {
    name: "Ben",
    color: "Purple",
    age: 23,
    isStudent: true
}

const userProfile2 = {
    name: "Sam",
    color: "Green",
    age: 22,
    isStudent: false
}

// Sample User Posts
const post = {
    month: 11,
    day: 8,
    year: 2024,
    isImage: true,
}

const post2 = {
    month: 5,
    day: 17,
    year: 2023,
    isImage: false,
}

// Sample User Comments
const comment = "Woah, nice hat!";
const comment2 = "I've always wanted to visit there!";
const comment3 = "What was your favourite part of your trip?";
const comment4 = "That food looks delicious!";

// Function to add a delay, mimicking a time-intensive operation
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to fetch user profiles with a promise that resolves after a delay
async function fetchProfiles() {
    try {
        const user1 = await fetch(userProfile);
        const user2 = await fetch(userProfile2);
        await delay(3000);
        return [user1, user2];
    } catch (error) {
        await delay(3000);
        console.error(`${error} in fetching user profiles!`);
    }
    
}

// Function to fetch user posts with a promise that resolves after a delay
async function fetchPosts() {
    try {
        const userPost1 = await fetch(post);
        const userPost2 = await fetch(post2);
        await delay(2000);
        return [userPost1, userPost2];
    } catch (error) {
        await delay(2000);
        console.error(`${error} in fetching user posts!`);
    }
    
}

// Function to fetch user comments with a promise that resolves after a delay
async function fetchComments() {
    try {
        nonExistentFunction(); // Function added to intentionally trigger the catch statement to test error handling
        const userComment1 = await fetch(comment);
        const userComment2 = await fetch(comment2);
        const userComment3 = await fetch(comment3);
        const userComment4 = await fetch(comment4);
        await delay(1000);
        return [userComment1, userComment2, userComment3, userComment4];
    } catch (error) {
        await delay(1000);
        console.error(`${error} in fetching user comments!`);
    }
    
}

// Function to fetch all data in sequence and logs step-by-step combining the results at the end
async function primaryGetUserContent() {
   
    let output = "";
    await fetchProfiles().then(result => {
        output += result;
        console.log("Profiles received.");
    });
    await fetchPosts().then(result => {
        output += result;
        console.log("Posts received.");
    });
    await fetchComments().then(result => {
        output += result;
        console.log("Comments received.");
    }).then(result => {
        console.log(output);
        console.log("Final output received");
    });
}

// Function to fetch all data in parallel and logs step-by-step combining the results at the end
async function secondaryGetUserContent() {
   
    let output = "";
    fetchProfiles().then(result => {
        output += result;
        console.log("Profiles received.");
    });
    fetchPosts().then(result => {
        output += result;
        console.log("Posts received.");
    });
    fetchComments().then(result => {
        output += result;
        console.log("Comments received.");
    }).then(result => {
        console.log(output);
        console.log("Final output received");
    });
}

// Calls to our last two functions with a 5 second delay between them
// Sequence takes around 6 seconds and arrives in order
// Parallel takes around 3 seconds and arrives out of order
console.log("In Sequence");
primaryGetUserContent();
await delay(5000);
console.log("In parallel");
secondaryGetUserContent();