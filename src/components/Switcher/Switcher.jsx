import "./Switcher.scss"
import NavTabs from "../../ui/Tab/Tab.jsx";

export default function Switcher({leftSwitch, rightSwitch, leftLink, rightLink}) {
    return (
        <>
            <div className="switcher">
                <NavTabs leftTab={leftSwitch} rightTab={rightSwitch} leftLink={leftLink} rightLink={rightLink} />
            </div>
        </>
    )
}
