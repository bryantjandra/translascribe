import { LANGUAGES } from "../utils/presets.js";

function Translation(props) {
  const {
    textElement,
    toLanguage,
    translating,
    translation,
    setTranslation,
    setTranslating,
    setToLanguage,
  } = props;

  return (
    <div className="flex flex-col gap-2 max-w-[400px] w-full mx-auto">
      <div className="flex flex-col gap-1">
        <p className="text-xs sm:text-sm text-slate-500 font-medium mr-auto">
          To Language
        </p>
        <div className="flex items-stretch gap-2">
          <select
            value={toLanguage}
            className="flex-1 outline-none bg-white focus:outline-none border-solid border-transparent hover:border-blue-300 duration-200 p-2 rounded"
            onChange={(e) => {
              setToLanguage(e.target.value);
            }}
          >
            <option value="Select language">Select language</option>
            {Object.entries(LANGUAGES).map(([key, value]) => {
              return (
                <option value={value} key={key}>
                  {key}
                </option>
              );
            })}
          </select>
          <button className="specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration:200">
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Translation;
