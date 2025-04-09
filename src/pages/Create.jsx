import FormInput from "../components/FormInput";
import FormTexArea from "../components/FormTexArea";
import { useFireStore } from "../hooks/useFireStore";

function Create() {
  const { addDocument } = useFireStore("recepies");
  const handSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");
    console.log(title, cookingTime, description);
  };

  return (
    <div>
      <form onSubmit={handSubmit}>
        <h2 className="text-3xl bold">Create New Recepies</h2>
        <FormInput name="title" label="title" type="text" />
        <FormInput name="cookingTime" label="cookingTime" type="number" />
        <FormInput name="ingredients" label="ingredients" type="text" />
        <FormTexArea name="description" label="description" />
        <div className="mt-5">
          <button className="btn btn-primary mt-3">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
