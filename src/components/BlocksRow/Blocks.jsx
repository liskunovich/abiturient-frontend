import "./Blocks.scss"
import Block from "../../ui/Block/Block.jsx";

export default function Blocks({data}) {
    let minimum = data.min_pass_score;
    let max = data.max_pass_score;
    let middle = data.medium_pass_score;

    return (
        <div className="blocks">
            <Block top={"Минимальный проходной балл"} middle={minimum} bottom={""}/>
            <Block top={"Средний проходной балл"} middle={middle} bottom={""}/>
            <Block top={"Максимальный проходной балл"} middle={max} bottom={""}/>
        </div>
    )
}
