function App() {
    let comments = [
        {id: 1, text : 'hello'},
        {id: 2, text : 'bye'}
    ]
    let test;
    return (
    <div>
        <h1>Hello from the app component</h1>
        <div>
            <h3>hellos</h3>
            <ul>
            {comments.map( (comment, index) => 
                <li key={index}>{comment.text} </li>
            )}

            </ul>
        </div>
        
    </div>
    );
    
}

export default App