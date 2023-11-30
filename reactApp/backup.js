import { useEffect, useState } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   console.log("i run all the time");
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("CALL THE API....");
//     console.log("I run only once.");
//   }, []); // 딱 한번만 실행
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]); // 실행할 함수, keyword의 변화가 있을 때만 실행
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]); // couter의 변화 탐지
//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter]); // 둘 중 하나라도 변하면 실행
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// function Hello() {
//   useEffect(function () {
//     console.log("hi :)"); // Component가 생성될 때 실행
//     return function () {
//       console.log("bye :(");
//     }; // Component가 삭제될 때 실행
//   }, []);
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div> // 자바스크립트 쓸 땐 중괄호
//   );
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setCoins(data);
//         setLoading(false);
//       });
//   });
//   return (
//     <div>
//       <h1>The Coins {coins.length}</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <ul>
//         {coins.map((coin, index) => {
//           return <li key={index}>{coin.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

import Movie from "./components/Movie.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
