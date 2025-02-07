import CheckboxSaver from "../component/checkbox-saver"
import EditableInput from "../component/editable-input"
import Header from "../component/header"
import RadioButtonSelector from "../component/radio-btn-selector"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto shadow-lg">
        <Header/>
        <EditableInput title="Name:" defaultVal="M. Hamza Iqbal"/>
        <EditableInput title="Email:" defaultVal="raohamza936@gmail.com"/>
        <CheckboxSaver/>
        <RadioButtonSelector/>
      </div>
    </div>
  )
}

export default Home
