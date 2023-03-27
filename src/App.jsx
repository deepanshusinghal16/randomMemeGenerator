import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center gap-5 pb-10 ">
      <h1 className=" bg-white rounded-2xl text-3xl font-bold w-[70vw] max-w-[1080px] py-2 text-center mt-5 mx-10">RANDOM GIFS</h1>
      <div className="flex flex-col gap-5 w-[85vw] max-w-[980px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
