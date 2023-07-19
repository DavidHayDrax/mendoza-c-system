import { CLTodo } from "./CLTodo";
import { CLFilter } from "./CLFilter/CLFilter";

const CLList = ({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map((todo) => {
        return (
          <CLTodo
            key={todo.id}
            todo={todo}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
          />
        );
      })}
      <CLFilter
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { CLList };
