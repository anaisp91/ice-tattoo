import { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    upperage: "",
    tattooFor: "",
    idea: "",
    references: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const onChange = (e) => {
    const value = e.target.type === "file" ? e.target.files : e.target.value;
    const name = e.target.type === "file" ? "references" : e.target.name;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(form);
    if (
      !form.email ||
      !form.idea ||
      !form.name ||
      !form.tattooFor ||
      !form.upperage
    ) {
      setError("Complete all fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("upperage", form.upperage);
    formData.append("tattooFor", form.tattooFor);
    formData.append("idea", form.idea);
    for (const file of form.references) {
      formData.append("attachments[]", file);
    }
    setError(null);
    setLoading(true);
    setSuccess(null);
    console.log("Success");
    try {
      const response = await fetch("https://usebasin.com/f/9a4cd2a42965", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        setError("Request failed");
        return;
      }
      setSuccess(true);
      setError(null);
      setForm({
        name: "",
        email: "",
        upperage: "",
        tattooFor: "",
        idea: "",
        references: "",
      });
    } catch {
      setError("Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className=" text-[var(--color-sand)] w-full max-w-[300px] py-5 flex flex-col gap-5  px-8 md:max-w-[600px] md:px-0 md:text-lg"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            className=" max-w-[200px] border-b border-[var(--color-sand)] bg-transparent outline-none md:max-w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            className="border-b border-[var(--color-sand)] bg-transparent outline-none md:max-w-[400px]"
          />
        </div>
        <fieldset className="flex gap-3">
          <legend className="pb-2">Are you 18 or older?</legend>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="upperage"
              value="yes"
              onChange={onChange}
              className="accent-[var(--color-blue)]"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="upperage"
              value="no"
              onChange={onChange}
              className="accent-[var(--color-blue)]"
            />
            No
          </label>
        </fieldset>
        <fieldset className="flex flex-row gap-5">
          <legend className="pb-2">Tattoo for</legend>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tattooFor"
              value="myself"
              onChange={onChange}
              className="accent-[var(--color-blue)]"
            />
            Myself
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tattooFor"
              value="group"
              onChange={onChange}
              className="accent-[var(--color-blue)]"
            />
            Group
          </label>
        </fieldset>
        <div className="flex flex-col gap-2">
          <label htmlFor="idea">Tell me about your idea</label>
          <textarea
            id="idea"
            name="idea"
            rows="10"
            cols="30"
            onChange={onChange}
            className="max-w-[200px] border-b border-[var(--color-sand)] bg-transparent outline-none resize-none h-24 md:max-w-[400px]"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label>References</label>
          <input
            type="file"
            id="references"
            name="attachments[]"
            multiple
            accept="image/*"
            onChange={onChange}
            className="hidden"
          />
          <label
            htmlFor="references"
            className="border border-[var(--color-sand)] text-[var(--color-sand)] py-1 cursor-pointer w-[150px] text-center hover:bg-[var(--color-sand)] hover:text-[--color-black] transition-all duration-300"
          >
            Upload fle
          </label>
          {form.references.length === 0
            ? ""
            : `References selected - ${form.references.length}`}
        </div>
        {error && <p>{error}</p>}
        {loading && <p>Sending...</p>}
        {success && <p>Message sent successfully!</p>}
        <div className="py-10">
          <input
            type="submit"
            value="Send"
            className="text-[var(--color-sand)] border border-[var(--color-sand)] py-3 px-7 hover:bg-[var(--color-blue)] hover:text-[var(--color-sand)] hover:border-[var(--color-blue)] transition-all duration-300"
          />
        </div>
      </form>
    </>
  );
};
