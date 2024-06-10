import "./Block.scss"

export default function Block({top, middle, bottom }) {
    return (
        <div className="block">
            <h4>{top}</h4>
            <h3>{middle}</h3>
            <p>{bottom}</p>
        </div>
    )
}
