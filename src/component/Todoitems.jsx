import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("deleted something", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";

  // const name =  "John"
  // const age = 30
  // const message = `Hello my name is ${name} and i am ${age} Years Old`
  // console.log(message);

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={`${className} ${styles.pointer}`}
          onClick={() => handleClick(item.name)}
        >
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
