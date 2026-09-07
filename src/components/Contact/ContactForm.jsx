export const ContactForm = () => {
  return (
    <>
      <form
        className=" text-[var(--color-sand)] w-full max-w-[300px] py-5 flex flex-col gap-5  px-8 md:max-w-[600px] md:px-0 md:text-lg"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className=" max-w-[200px] border-b border-[var(--color-sand)] bg-transparent outline-none md:max-w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
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
              className="accent-[var(--color-blue)]"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="upperage"
              value="no"
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
              className="accent-[var(--color-blue)]"
            />
            Myself
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tattooFor"
              value="group"
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
            className="max-w-[200px] border-b border-[var(--color-sand)] bg-transparent outline-none resize-none h-24 md:max-w-[400px]"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label>References</label>
          <input
            type="file"
            id="references"
            name="references"
            multiple
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="references"
            className="border border-[var(--color-sand)] text-[var(--color-sand)] py-1 cursor-pointer w-[150px] text-center hover:bg-[var(--color-sand)] hover:text-[--color-black] transition-all duration-300"
          >
            Upload fle
          </label>
        </div>
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
