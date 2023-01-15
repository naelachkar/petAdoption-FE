import { useNavigate } from "react-router-dom";

export default function PetRenderer({ _id, picture, name, type }) {
  const navigate = useNavigate();

  return (
    // <div key={_id} name={_id} className="petCard">
    <>
      {picture && <img src={picture}></img>}
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
    // </div>
  );
}
