const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} your age is {props.age}
      </p>
    </div>
  );
};
const App = () => {
  const name = "Kumail";
  const age = 25;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
