import Hello from './components/Hello';
import HelloWithProps from './components/HelloWithProps';
import Counter from './components/Counter';
import InputTracker from './components/InputTracker';
import LoginStatus from './components/LoginStatus';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import PrimeCalculator from './components/PrimeCalculator';
import useReducer from './components/UseReducer';
function App() {
  const todos = ['Zadanie 1', 'Zadanie 2', 'Zadanie 3'];

  return (
    <div>
      <Hello />
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter />
      <InputTracker />
      <LoginStatus isLoggedIn={true} />
      <TodoList todos={todos} />
      <LoginForm />
      <PrimeCalculator />
      <useReducer />
    </div>
  );
}

export default App;
