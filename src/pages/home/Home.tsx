import TinderView from "./components/tinderView/TinderView";

const Home = (): JSX.Element => {

  return (
      <div className="flex flex-col h-full bg-white bg-gradient-to-r from-sky-300 to-green-200 justify-center items-center overflow-hidden">
        <TinderView />
      </div>
  )
}

export default Home;