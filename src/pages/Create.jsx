import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTexArea from "../components/FormTexArea";
import { useFireStore } from "../hooks/useFireStore";
import { useNavigate } from "react-router-dom";

function Create() {
  const { addDocument } = useFireStore("recepies");
  const [ingredients, setIngredients] = useState([""]);
  const navigate = useNavigate();

  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement);
    const ingredient = formData.get("ingredient");
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    console.log(ingredient);
  };

  const handSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const imgUrl = formData.get("imgUrl");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");
    addDocument({
      title,
      imgUrl,
      cookingTime: `${cookingTime} minutes`,
      description,
      ingredients,
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handSubmit}>
        <h2 className="text-3xl bold">Create New Recepies</h2>
        <FormInput name="title" label="title" type="text" />
        <FormInput name="imgUrl" label="imgUrl" type="text" />
        <FormInput name="cookingTime" label="cookingTime" type="number" />
        <div className=" items-center w-full justify-between">
          <FormInput name="ingredient" label="Ingredients" type="text" />
          <button
            onClick={addIngredient}
            type="button"
            className="btn btn-secondary "
          >
            Add
          </button>
          <p>
            Ingredient: {""}
            {ingredients.map((i) => {
              return <i key={i}> {i} </i>;
            })}
          </p>
        </div>
        <FormTexArea name="description" label="description" />

        <div className="mt-5">
          <button className="btn btn-primary mt-3">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
