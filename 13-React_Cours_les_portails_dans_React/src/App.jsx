import {createPortal} from "react-dom";

export function App() {
  return (
    <div
      style={{
        height: 300,
        overflowY: "scroll",
        background: "#EEE",
        margin: 20,
        position: "relative",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit
        beatae autem quidem enim modi necessitatibus ea libero eaque ullam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        praesentium voluptate culpa eaque fugiat ea voluptatibus at aperiam
        earum assumenda, accusantium iure itaque eum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed corrupti
        in officiis voluptatibus placeat nisi impedit quod, animi ex ducimus,
        dolores nulla eaque magnam perspiciatis nostrum fugit unde amet error.
      </p>
      <Modal />
    </div>
  );

  // function Modal() {
  //   return (
  //     <div
  //       style={{
  //         position: "absolute",
  //         top: 0,
  //         right: 0,
  //         padding: 10,
  //         border: "1px solid #000",
  //         background: "#FFF",
  //       }}
  //     >
  //       Je suis une modale !
  //     </div>
  //   );
  // }

  function Modal() {
    return createPortal(
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 10,
          border: "1px solid #000",
          background: "#FFF",
        }}
      >
        Je suis une modale !
      </div>,
      document.body
    );
  }
}
export default App;
