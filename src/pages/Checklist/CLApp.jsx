import React from "react";
import { useState } from "react";
import Sidebar from "../../components/shared/Sidebar";
import { CLInput } from "./CLInput";
import { CLList } from "./CLList";
import { useEffect } from "react";

function Checklist() {
  const [showMenu, setShowMenu] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "xD",
      completed: false,
    },
    {
      id: 2,
      title: "Record the next video",
      completed: false,
    },
    {
      id: 3,
      title: "wash the dishes",
      completed: false,
    },
    {
      id: 4,
      title: "Study 2 hours",
      completed: false,
    },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };
    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const showAllTodos = (id) => {
    setActiveFilter("all");
  };

  const showActiveTodos = (id) => {
    setActiveFilter("active");
  };

  const showCompletedTodos = (id) => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <main className="lg:pl-32 pb-20 pt-5 text-gray-100 flex">
        <div className="flex flex-col w-full">
          <div className="flex text-5xl font-semibold text-blue-500 border-b pb-2">
            CHECKLIST
          </div>
          <div className="flex flex-col p-4 max-w-xl">
            {/*TITULO */}
            <h1 className="text-5xl font-anton tracking-widest">
              Importante
            </h1>
            {/*CLINPUT */}
            <CLInput addTodo={addTodo} />
            <CLList
              activeFilter={activeFilter}
              todos={filteredTodos}
              showAllTodos={showAllTodos}
              showActiveTodos={showActiveTodos}
              showCompletedTodos={showCompletedTodos}
              handleSetComplete={handleSetComplete}
              handleDelete={handleDelete}
              handleClearComplete={handleClearComplete}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checklist;
