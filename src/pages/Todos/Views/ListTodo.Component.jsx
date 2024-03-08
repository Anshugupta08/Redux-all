import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { removeTodo, editTodo } from "../todos.slice";

const ListTodo = () => {
  const todos = useSelector((state) => state.raviTodos.data);
  const dispatch = useDispatch();

  const onEditTodo = (id, updatedTodo) => {
    console.log("updating");
    dispatch(editTodo({ id, updatedTodo }));
  };

  const onDeleteTodo = (item) => {
    confirmAlert({
      title: "Delete confirmation!",
      message: `Are you sure that you want to delete ${item.title}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(removeTodo(item.id)),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid silver",
              padding: "12px",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>{item.title}</p>
              <div>
                <button onClick={() => onDeleteTodo(item)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  onClick={() =>
                    onEditTodo(item.id, { ...item, title: "Updated Title" })
                  }
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </div>
            <p style={{ fontSize: "11px", color: "#666" }}>
              {item.description}
            </p>
            <p style={{ fontSize: "11px", color: "#666" }}>{item.createdAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
// import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import { removeTodo } from "../todos.slice";
// import { editTodo } from "../todos.slice";

// const ListTodo = () => {
//   const todos = useSelector((state) => state.raviTodos.data);
//   const dispatch = useDispatch();

//   const onEditTodo = (id, updatedTodo) => {
//     console.log("updating");
//     dispatch(editTodo({ id, updatedTodo }));
//   };

//   const onDeleteTodo = (item) => {
//     confirmAlert({
//       title: "Delete confirmation!",
//       message: `Are you sure that you want to delete ${item.title}`,
//       buttons: [
//         {
//           label: "Yes",
//           onClick: () => dispatch(removeTodo(item.id)),
//         },
//         {
//           label: "No",
//           onClick: () => {},
//         },
//       ],
//     });
//   };

//   return (
//     <div>
//       <h1>My Todos</h1>
//       {todos.map((item) => {
//         return (
//           <div
//             key={item.id}
//             style={{
//               border: "1px solid silver",
//               padding: "12px",
//               marginBottom: "4px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "right-corner",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p>{item.title}</p>
//               <button onClick={() => onDeleteTodo(item)}>
//                 <FontAwesomeIcon icon={faTrash} />
//               </button>
//               <button onClick={() => onEditTodo(it)}>
//                 <FontAwesomeIcon icon={faEdit} />
//               </button>
//             </div>

//             <p style={{ fontSize: "11px", color: "#666" }}>
//               {item.description}
//             </p>
//             <p style={{ fontSize: "11px", color: "#666" }}>{item.createdAt}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default ListTodo;
