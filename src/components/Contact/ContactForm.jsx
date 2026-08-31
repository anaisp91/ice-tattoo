export const ContactForm = () => {
  return (
    <>
      <form
        className=" text-stone-300 max-w-[300px] py-5 flex flex-col gap-5  px-8 md:max-w-[700px] md:text-lg"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="flex flex-col gap-2 max-w-[200px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b border-stone-300 bg-transparent outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 max-w-[200px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b border-stone-300 bg-transparent outline-none"
          />
        </div>
        <fieldset className="flex gap-3">
          <legend className="pb-2">Are you 18 or older?</legend>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="upperage"
              value="yes"
              className="accent-sky-900"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="upperage"
              value="no"
              className="accent-sky-900"
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
              className="accent-sky-900"
            />
            Myself
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tattooFor"
              value="group"
              className="accent-sky-900"
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
            className="border-b border-stone-300 bg-transparent outline-none resize-none h-24"
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
            className="border border-stone-300 text-stone-300 py-1 cursor-pointer w-[150px] text-center hover:bg-sky-900 hover:border-sky-900 transition-all duration-100"
          >
            Upload fle
          </label>
        </div>
        <div className="py-10">
          <input
            type="submit"
            value="Send"
            className="text-stone-300 border py-3 px-7 hover:bg-stone-300 hover:text-neutral-900 transition-all duration-300"
          />
        </div>
      </form>
    </>
  );
};
