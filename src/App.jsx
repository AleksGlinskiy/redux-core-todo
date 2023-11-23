import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

export default function App () {
    return <div>
        <Input type="text" placeholder="Новый элемент" />
        <Button>Добавить</Button>
    </div>;
}