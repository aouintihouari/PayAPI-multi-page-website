import check from "../../assets/shared/desktop/icon-check.svg";

const Feature = ({ text, included }) => {
  return (
    <div className="mb-3 flex items-center gap-3">
      <div className="w-5 shrink-0">{included && <img src={check} />}</div>
      <span
        className={`text-sm ${included ? "text-sun-juan-blue" : "text-slate-300"}`}
      >
        {text}
      </span>
    </div>
  );
};

export default Feature;
