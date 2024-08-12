import HomeIcon from "@/assets/home-svgrepo-com.svg";

export default function HomeButton() {
  //
  return (
    <button
      className="round"
      onClick={() => {
        location.href = "/demo";
      }}
    >
      <img src={HomeIcon} className="medium" />
    </button>
  );
}
