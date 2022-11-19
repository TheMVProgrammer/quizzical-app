//Fetching data from trivia opendb api
const dataQuestions = async gameOptions => {
    //Destructuring parameters to get questions based on user selection, I will use this later to create a custom url.
    const {category, difficulty, type} = gameOptions;

    let categoryQueryParameter = "";
    let difficultyQueryParameter = "";
    let typeQueryParameter = "";
    
    //This helps to get the category, difficulty and type based on the value provided by the 
    //parameters above
    if (category !== "") 
        categoryQueryParameter = `&category=${category}`; 
    if (difficulty !== "") 
        difficultyQueryParameter = `&difficulty=${difficulty}`; 
    if (type !== "") 
        typeQueryParameter = `&type=${type}`; 
    
        //Custom API URL with category, difficulty and type specified above.
    let apiUrl = `https://opentdb.com/api.php?amount=5${categoryQueryParameter}${difficultyQueryParameter}${typeQueryParameter}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    return data.results;
    
}

export default dataQuestions;