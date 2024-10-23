export default function Time({ time }) {
  return (
    <>
      <div className="p-5 rounded-lg border border-[#6047EC] bg-[#6047EC1A]">
        <h5 className="text-lg font-bold text-[#6047EC]">
          Spent time on read : {time} min
        </h5>
      </div>
    </>
  );
}
