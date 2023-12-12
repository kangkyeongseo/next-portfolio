export default function Header() {
  return (
    <header className="w-full fixed top-0 flex justify-between px-24 py-8">
      <h1 className="text-lg uppercase text-gray-600">KyeongSeo</h1>
      <ul className="flex space-x-8 uppercase text-gray-500">
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
