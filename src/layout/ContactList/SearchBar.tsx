import { AiOutlineSearch } from "react-icons/ai"
import MyInput from "../../components/MyInput"

const SearchBar = () => {
  return (
      <div className="flex items-center px-4 bg-white h-20">
        <MyInput
          button={{
            label: <AiOutlineSearch size={"1.5em"} />,
            theme: "primary",
          }}
          space="py-1"
          placeholder={"Find someone..."}
        />
      </div>
  )
}

export default SearchBar