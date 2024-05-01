import Checkbox from "./components/Checkbox";

export default function Home() {
  return (
    <main
      className="flex justify-center items-center h-screen bg-no-repeat bg-center"
      style={{ backgroundImage: "url(image/pattern.jpg)" }}
    >
      <Checkbox />
    </main>
  );
}
