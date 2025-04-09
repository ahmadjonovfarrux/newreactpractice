function FormTexArea({ label, name }) {
  return (
    <div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <textarea
          className="textarea h-24 w-full"
          placeholder="Type here"
          name={name}
        ></textarea>
      </fieldset>
    </div>
  );
}

export default FormTexArea;
