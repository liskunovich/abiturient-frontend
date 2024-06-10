import "./Blocks.scss"
import Block from "../../ui/Block/Block.jsx";

export default function Blocks() {
    return (
        <div className="blocks">
            <Block top={"Минимальный проходной балл"} middle={95} bottom={"ВКТУ им. Д. Серикбаева"}/>
            <Block top={"Средний проходной балл"} middle={101} bottom={"Среди всех университетов"}/>
            <Block top={"Максимальный проходной балл"} middle={122} bottom={"МУИТ"}/>
        </div>
    )
}
