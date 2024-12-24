import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:1,
            label: "This is heading 1",
            content: "This is content 1"
        },
        {
            id:2,
            label: "This is heading 2",
            content: "This is content 2"
        },
        {
            id:3,
            label: "This is heading 3",
            content: "This is content 3"
        }];
    return <Accordion items={items}/>
}

export default AccordionPage;