import { useNavigate } from "react-router-dom";

export default function PetRenderer({ _id, picture, name, type }) {
  const navigate = useNavigate();

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
      <button onClick={() => navigate(`/pet?id=${_id}`)}>See more</button>
    </>
  );
}
