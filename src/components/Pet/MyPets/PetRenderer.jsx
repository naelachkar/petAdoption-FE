import { useNavigate } from "react-router-dom";
import { PetContext } from "../PetContext";

export default function PetRenderer({ _id, picture, name, type }) {
  const navigate = useNavigate();
  const { setCurrentPet } = useContext(PetContext);

  return (
    <>
      {picture && <img src={picture} alt="image of a pet"></img>}
      <div className="petText">
        <div className="petNameAndType">
          <span className="petName">
            <b>{name}</b>
          </span>
          {type === "Dog" && "🐶"}
          {type === "Cat" && "🐱"}
        </div>
      </div>
      <button
        onClick={() => {
          setCurrentPet("");
          navigate(`/pet?id=${_id}`);
        }}>
        See more
      </button>
    </>
  );
}
