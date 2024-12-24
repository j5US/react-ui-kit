import Button from "../components/Button";
import { GoBell,GoCloudDownload,GoDatabase  } from "react-icons/go";

function ButtonPage() {

    const handleClick = ()=>{    }
    return <div>
        <div>
            <Button onClick={handleClick} primary outline><GoBell/> Click me!</Button>
        </div>
        <div>
            <Button secondary outline> <GoCloudDownload/> Submit</Button>
        </div>
        <div>
            <Button warning rounded><GoDatabase/> Infomercial</Button>
        </div>
        <div>
            <Button danger outline>Warning!</Button>
        </div>
        <div>
            <Button success rounded>Success</Button>
        </div>
    </div>;
}

export default ButtonPage;